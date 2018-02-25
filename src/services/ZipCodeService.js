// IMPORT DATA FROM STATIC JSON FILE

import zips from './zips.json';


// COMPONENT

const simulateError = false;

export const fetchZipCodes = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of zip codes');
            } else {
                resolve(zips);
            }
        }, 1000);
    });
};