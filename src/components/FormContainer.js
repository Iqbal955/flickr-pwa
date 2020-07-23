import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Form from "./Form.js";

export default function FormContainer(){

        // query holds query parameters
        const [ query, setQuery ] = useState('');
        // The history object allows us to push, i.e. forward the query terms to a new URL while retaining use of the back button
        const history = useHistory();
    
        // liftUpQuery lifts the query state from the form to here, at which point we pass it down to Search
        function liftUpQuery (query) {
            // Set the query state and use it to push to the search url, passing along the search string and state
            setQuery(query);
            // Add the search url to the history stack (and navigate there)
            history.push({
                pathname: '/search',
                search: '?query=' + query,
                state: query
            });
        }

        return (
            <Form liftUpQuery={liftUpQuery} /> 
        )

}