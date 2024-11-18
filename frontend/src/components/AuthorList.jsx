import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('/api/authors').then((response) => {
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
