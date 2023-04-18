import React from 'react';

const Task_3 = ({ products, deleteproduct, checkbox }) => {
    return (
        <table style={{ border: '2px solid black', fontSize: '20px', padding: '20px'}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>FullPrice</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.price}$</td>
                        <td>{item.amount}</td>
                        <td>{item.price * item.amount}</td>
                        <td>
                            <a href="#" onClick={() => deleteproduct(item.id)}>delete</a>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                checked={products.checked}
                                onChange={() => checkbox(item.id)}
                            />
                        </td>
                </tr>))}
            </tbody>
        </table>
    );
};

export default Task_3;
