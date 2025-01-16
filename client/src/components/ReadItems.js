import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/items');
                setItems(response.data);
            } catch (err) {
                console.error(err.message);
            }
        };
        fetchItems();
    }, []);

    return (
        <div>
            <h2>Lista de Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <strong>{item.name}</strong>: {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadItems;


