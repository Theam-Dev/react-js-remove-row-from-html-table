import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [rows, setRows] = useState([
    { id: 1, name: "Alice", phone: "1234567890", email: "alice@example.com" },
    { id: 2, name: "Bob", phone: "0987654321", email: "bob@example.com" },
    { id: 3, name: "Charlie", phone: "1357924680", email: "charlie@example.com" },
  ]);

  const deleteRow = (index) => {
    // make a copy of the rows array
    const newRows = [...rows];
    // remove one element at index
    newRows.splice(index, 1);
    // update the state with the new array
    setRows(newRows);
  };

  return (
    <div style={{padding: "20px"}}>
      <h4>Tutorial Sharing- React Remove Row</h4>
      <br/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.phone}</td>
              <td>{row.email}</td>
              <td>
                <button onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;