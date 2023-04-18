import { useState } from 'react';
import './App.css';
import Task_1 from './Components/1-5';
import Task_2 from './Components/6';
import Task_3 from './Components/7';
import Task_4 from './Components/8';
import Task_5 from './Components/9';

function App() {
    //Для завдання 1-5
    const [users, setUsers] = useState([
        { id: 1, firstName: 'Ivan', lastName: 'Petrov', age: 25 },
        { id: 2, firstName: 'Petro', lastName: 'Ivanov', age: 32 },
        { id: 3, firstName: 'Sasha', lastName: 'Petrov', age: 35 },
        { id: 4, firstName: 'Max', lastName: 'Oleksandrovich', age: 15 },
    ]);
    const showMessage = () => {
        alert("!");
    };
    const showName = (name) => {
        alert(name);
    }
    const showDigit = (number) => {
        alert(number);
    }
    const deleteUser = (userID) => {
        setUsers(users.filter(user => user.id !== userID));
    }
    //Для завдання 6
    const Array = ['Xiaomi', 'Iphone', 'Samsung', 'Motorola', 'Huawei'];
    //Для завдання 7
    const [Products, setProducts] = useState([
        { id: 1, name: 'Milk', price: 2.70, amount: 40, checked: false },
        { id: 2, name: 'Eggs', price: 3, amount: 600, checked: false },
        { id: 3, name: 'Cheese', price: 1.50, amount: 50, checked: false },
        { id: 4, name: 'Oil', price: 1, amount: 100, checked: false },
        { id: 5, name: 'Yogurt', price: 1.99, amount: 80, checked: false },
    ]);
    const deleteProduct = (productId) => {
        setProducts(Products.filter(Products => Products.id !== productId));
    }
    //Для завдання 8
    const addProduct = (newProduct) => {
        setProducts([...Products, newProduct]);
    }
    //Для завдання 9
    const handleCheckboxChange = (productId) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === productId) {
                    return { ...product, checked: !product.checked };
                }
                return product;
            });
        });
    };

  return (
      <div className="App">
          <Task_1 users={users} showmsg={showMessage} shownm={showName} showdt={showDigit} deleteUser={deleteUser} />
          <Task_2 array={Array} />
          <Task_3 products={Products} deleteproduct={deleteProduct} checkbox={handleCheckboxChange} />
          <Task_4 onProductAdd={addProduct} product={Products} />
          <Task_5 products={Products} />
    </div>
  );
}

export default App;
