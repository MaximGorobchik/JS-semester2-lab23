import React from 'react';

const Task_5 = ({ products }) => {
    const getTotalCost = () => {
        const checkedProducts = products.filter(product => product.checked);
        return checkedProducts.reduce((acc, product) => acc + (product.price * product.amount), 0);
    };
    return (
        <div>
            <h2>Total Cost: {getTotalCost()}$</h2>
        </div>
    );
};

export default Task_5;
