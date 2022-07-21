import React from "react";

import './ErrorMessage.css';

function ErrorMessage() {
  return (
    <span className="errorMessage errorMessage_visible">Что-то пошло не так...</span> 
  );
}

export default ErrorMessage;