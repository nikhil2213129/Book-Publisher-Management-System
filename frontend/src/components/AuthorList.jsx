import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const BASE_URL =
    process.env.REACT_APP_BACKEND_URL ||
    window.location.origin.replace('3000', '8080');
        axios.get(`${BASE_URL}/api/authors`).then((response) => {
            setAuthors(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Authors</h1>
            <ul>
                {authors.map((author) => (
                    <li key={author.id}>{author.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AuthorList;
