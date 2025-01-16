import React, { useState } from 'react';

const UpdateItem = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/items/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, description }),
            });
            if (response.ok) {
                alert('Item actualizado con éxito');
                setId('');
                setName('');
                setDescription('');
            } else {
                alert('Error al actualizar el item');
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <h2>Actualizar Item</h2>
            <label>
                ID:
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Nombre:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Descripción:
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Actualizar</button>
        </form>
    );
};

export default UpdateItem;
