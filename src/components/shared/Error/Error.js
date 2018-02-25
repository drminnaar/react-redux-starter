// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT

const Error = (props) => (
    <div className="alert alert-danger p-5 m-5" role="alert">
        <i className="fas fa-exclamation-circle fa-2x"></i>
        <span className="h4 ml-3 alert-heading">Unexpected Application Error</span>
        <p className="ml-5 mt-3">{props.message}</p>
    </div>
);

Error.propTypes = {
    message: PropTypes.string.isRequired
};

export { Error };