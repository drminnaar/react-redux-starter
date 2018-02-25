// IMPORT PACKAGE REFERENCES

import React from 'react';

// IMPORT IMAGES

import react from '../../images/react-small.png';
import reactrouter from '../../images/react-router-small.png';
import redux from '../../images/redux-small.png';
import bootstrap from '../../images/bootstrap4-small.png';
import sass from '../../images/sass-small.png';
import webpack from '../../images/webpack-small.png';


// COMPONENT

const HomePage = () => (
    <main>
        <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
            <h1 className="display-6 text-center">React Redux Starter</h1>
            <p className="lead text-center">The essential elements required to start building apps using React, React Router, Redux, Bootstrap 4, SASS, and Webpack</p>
            <hr className="my-4" />
            <div className="text-center">
                <img className="m-3" height="50" src={react} alt="React" />
                <img className="m-3" height="50" src={reactrouter} alt="React Router" />
                <img className="m-3" height="50" src={redux} alt="Redux" />
                <img className="m-3" height="50" src={bootstrap} alt="Bootstrap 4" />
                <img className="m-3" height="50" src={sass} alt="Sass" />
                <img className="m-3" height="50" src={webpack} alt="Webpack" />
            </div>
        </div>
    </main>
);

export { HomePage };