import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  addReview,
  clearReview,
  getReviewById,
} from "../../../store/actions/index";
import { toast } from "react-toastify";
import Uploader from "./uploader";

class ReviewForm extends Component {
  state = {
    mode: "add",
    editor: "",
    editorError: false,
    img: "https://via.placeholder.com/400",
    imgName: "",
    disable: false,
    initialValues: {
      title: "",
      excerpt: "",
      heading: "",
      public: "",
    },
  };

  componentDidMount() {
    const id = this.props.id;

    if (id) {
      this.props
        .dispatch(getReviewById(id))
        .then(() => {
          const reviewById = this.props.reviews.reviewById;
          this.setState({
            mode: "edit",
            editor: reviewById.content,
            img: reviewById.downloadUrl,
            imgName: reviewById.img,
            disable: false,
            initialValues: {
              title: reviewById.title,
              excerpt: reviewById.excerpt,
              heading: reviewById.heading,
              public: reviewById.public,
            },
          });
        })
        .catch((e) => {
          console.log("error de marde", e);
          this.props.history.push("/dashboard/reviews");
          toast.error("Désolé, ce post n'existe pas", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearReview());
  }

  handleResetForm = (resetForm) => {
    resetForm({});
    this.setState({
      editor: "",
      img: "https://via.placeholder.com/400",
      imgError: false,
      disable: false,
    });
    toast.success("Votre article est enregistré", {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  handleImageName = (name, download) => {
    this.setState({ img: download, imgName: name });
  };

  handleSubmit = (values, resetForm) => {
    let formData = {
      ...values,
      content: this.state.editor,
      img: this.state.imgName,
    };

    this.props.dispatch(addReview(formData, this.props.auth.user)).then(() => {
      this.handleResetForm(resetForm);
    });
  };

  render() {
    const state = this.state;

    return (
      <Formik
        enableReinitialize
        initialValues={state.initialValues}
        validationSchema={Yup.object({
          title: Yup.string().required("Donnez un titre"),
          excerpt: Yup.string().required("Ajoutez une description"),
          heading: Yup.string().required("Definissez une rubrique"),
          public: Yup.number().required("Brouillon ?"),
        })}
        onSubmit={(values, { resetForm }) => {
          if (Object.entries(state.editor).length === 0) {
            return this.setState({ editorError: true });
          } else if (state.imgName === "") {
            return this.setState({ imgError: true, editorError: false });
          } else {
            this.setState({ disable: true, editorError: false });
            this.handleSubmit(values, resetForm);
            console.log("SUBMIT");
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col md={8}>
                <Form.Group>
                  <Form.Label>Titre</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                  />
                  {errors.title && touched.title ? (
                    <div className="error">{errors.title}</div>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Extrait</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="excerpt"
                    value={values.excerpt}
                    onChange={handleChange}
                  />
                  {errors.excerpt && touched.excerpt ? (
                    <div className="error">{errors.excerpt}</div>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <CKEditor
                    editor={ClassicEditor}
                    data={this.state.editor}
                    onChange={(event, editor) => {
                      this.setState({
                        editor: editor.getData(),
                      });
                    }}
                  />
                </Form.Group>
                {state.editorError ? (
                  <div className="error">Vous devez ajouter un contenu !</div>
                ) : null}
                <Form.Group>
                  <Form.Label>Rubrique</Form.Label>
                  <Form.Control
                    as="select"
                    name="heading"
                    value={values.heading}
                    onChange={handleChange}
                  >
                    <option value="" defaultValue>
                      Choisissez...
                    </option>
                    <option value="react">React</option>
                    <option value="javascript">Javascript</option>
                    <option value="css">CSS</option>
                    <option value="node">Node</option>
                    <option value="api">API</option>
                    <option value="npm">npm</option>
                    <option value="redux">Redux</option>
                    <option value="firebase">Firebase</option>
                    <option value="various">Divers</option>
                  </Form.Control>
                  {errors.heading && touched.heading ? (
                    <div className="error">{errors.heading}</div>
                  ) : null}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Public</Form.Label>
                  <Form.Control
                    as="select"
                    name="public"
                    value={values.public}
                    onChange={handleChange}
                  >
                    <option value="" defaultValue>
                      Choisissez...
                    </option>
                    <option value="1">Public</option>
                    <option value="0">Draft</option>
                  </Form.Control>
                  {errors.public && touched.public ? (
                    <div className="error">{errors.public}</div>
                  ) : null}
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={state.disable}
                >
                  Valider
                </Button>
              </Col>
              <Col>
                <Uploader
                  img={this.state.img}
                  handleImageName={this.handleImageName}
                />
                {state.imgError ? (
                  <div className="error">Add an image please</div>
                ) : null}
              </Col>
            </Form.Row>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    reviews: state.reviews,
  };
};

export default connect(mapStateToProps)(ReviewForm);
