// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT

const ZipCodeListItem = ({id, city, state, population}) => (
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{city} ({state})</h5>
            <small className="text-muted">{id}</small>
        </div>
        <small className="text-muted">Population: {population}</small>
    </a>
);

ZipCodeListItem.propTypes = {
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
};

export { ZipCodeListItem };