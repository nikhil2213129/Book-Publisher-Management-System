import React from 'react';
import AuthorList from './components/AuthorList';
import AddAuthor from './components/AddAuthor';

const App = () => {
    return (
        <div>
            <h1>Book Publisher</h1>
            <AddAuthor />
            <AuthorList />
        </div>
    );
};

export default App;
