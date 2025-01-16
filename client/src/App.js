import React from 'react';
import CreateItem from './components/CreateItem';
import ReadItems from './components/ReadItems';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';

const App = () => {
    return (
        <div>
            <h1>PERN CRUD</h1>
            <CreateItem />
            <ReadItems />
            <UpdateItem />
            <DeleteItem />
        </div>
    );
};

export default App;
