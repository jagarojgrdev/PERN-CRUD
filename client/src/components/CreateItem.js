import React, { useState } from 'react';

const CreateItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, description }),
            });
            if (response.ok) {
                alert('Item creado con éxito');
                setName('');
                setDescription('');
            } else {
                alert('Error al crear el item');
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Item</h2>
            <label>
                Nombre:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Descripción:
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Crear</button>
        </form>
    );
};

export default CreateItem;
