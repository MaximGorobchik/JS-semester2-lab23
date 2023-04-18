import React, { useState } from 'react';

const Task_2 = ({ array }) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedText, setEditedText] = useState('');

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditedText(array[index]);
    };

    const handleInputChange = (event) => {
        setEditedText(event.target.value);
    };

    const handleInputBlur = () => {
        if (editedText !== '') {
            array[editingIndex] = editedText;
        }
        setEditingIndex(null);
        setEditedText('');
    };

    return (
        <ul>
            {array.map((item, index) => (
                <li key={index}>
                    {editingIndex === index ? (
                        <input
                            type="text"
                            value={editedText}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            autoFocus
                        />
                    ) : (
                        <>
                            {item}
                            <a
                                href="#"
                                onClick={() => handleEditClick(index)}
                                style={{ marginLeft: '5px' }}
                            >
                                Edit
                            </a>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Task_2;
