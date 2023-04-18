import React, { useState } from 'react';

const Task_4 = ({ onProductAdd, product}) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productAmount, setProductAmount] = useState(0);

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    };

    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value);
    };

    const handleProductAmountChange = (e) => {
        setProductAmount(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Знаходимо останнє значення id в масиві Products
        const lastProductId = product.length > 0 ? product[product.length - 1].id : 0;
        const newproduct = { id: lastProductId + 1, name: productName, price: Number(productPrice), amount: Number(productAmount) };
        // Функція з батьківського компонента, щоб додати новий продукт в таблицю
        onProductAdd(newproduct);

        // Очистити поля вводу після додавання продукту
        setProductName('');
        setProductPrice(0);
        setProductAmount(0);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Product name"
                value={productName}
                onChange={handleProductNameChange}
            />
            <input
                type="number"
                placeholder="Product price"
                value={productPrice}
                onChange={handleProductPriceChange}
            />
            <input
                type="number"
                placeholder="Product amount"
                value={productAmount}
                onChange={handleProductAmountChange}
            />
            <button type="submit">Add product</button>
        </form>
    );
};

export default Task_4;
