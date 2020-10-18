import React from 'react';
 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastComponent = () => {
//   const notify = () => toast("Wow so easy !");

  return (
    <div>
      {/* <button onClick={notify}>Notify !</button> */}
      <ToastContainer />
    </div>
  );
}

export default ToastComponent;