import React, { useState } from 'react';

const DeleteItem = () => {
    const [id, setId] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/items/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Item eliminado con éxito');
                setId('');
            } else {
                alert('Error al eliminar el item');
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <form onSubmit={handleDelete}>
            <h2>Eliminar Item</h2>
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
            <button type="submit">Eliminar</button>
        </form>
    );
};

export default DeleteItem;
