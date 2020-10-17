import React from 'react';

const Contact = props => {
    return (
        <>
        <Form onSubmit="" className="form_contact">
    <h1>Contact us</h1>
    <hr/>
    <Form.Group>
        <Form.Label>Add your name here</Form.Label>
        <Form.Control
            type="text"
            name="name"
        />
        <span className="error">This field is required</span>
    </Form.Group>
    <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
            type="Email"
            name="email"
        />
        <span className="error">Please check your email</span>
    </Form.Group>
    <Form.Group>
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
            as="textarea"
            rows="3"
            name="message"
        />
       <span className="error">Add a message</span>
    </Form.Group>
<Button variant="primary" type="submit">
    Submit
</Button>
</Form>



        </>
    )
}

export default Contact;