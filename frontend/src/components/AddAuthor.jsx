import React, { useState } from 'react';
import axios from 'axios';

const AddAuthor = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/authors', { name, bio }).then(() => {
            alert('Author added!');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Author Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Author Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />
            <button type="submit">Add Author</button>
        </form>
    );
};

export default AddAuthor;
