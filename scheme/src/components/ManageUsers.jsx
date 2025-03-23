import React, { useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Admin User", role: "JE" },
    { id: 2, name: "John Doe", role: "AE" },
  ]);

  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    alert(`User ${id} removed`);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center">Manage Users</h2>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <span className="badge bg-primary">{user.role}</span>
                </td>
                <td>
                  <button
                    onClick={() => handleRemove(user.id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
