import React from 'react';

const Task_1 = ({ users, showmsg, shownm, showdt, deleteUser }) => {
    return (
        <table style={{ border: '2px solid black', fontSize: '20px', padding: '10px' } }>
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                        <td>
                            <a href="#" onClick={showmsg}>showMsg</a>
                        </td>
                        <td>
                            <a href="#" onClick={() => shownm(user.firstName)}>showName</a>
                        </td>
                        <td>
                            <a href="#" onClick={() => showdt(user.id - 1)}>showIndex</a>
                        </td>
                        <td>
                            <a href="#" onClick={() => deleteUser(user.id)}>deleteUser</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Task_1;