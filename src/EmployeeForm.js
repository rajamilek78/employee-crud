import React, { useState } from 'react';

const EmployeeForm = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    aadharCard: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddEmployee = () => {
    if (editingIndex === null) {
      setEmployees([...employees, formData]);
    } else {
      const updatedEmployees = employees.map((employee, index) =>
        index === editingIndex ? formData : employee
      );
      setEmployees(updatedEmployees);
      setEditingIndex(null);
    }
    setFormData({
      name: '',
      email: '',
      position: '',
      address: '',
      pincode: '',
      city: '',
      state: '',
      aadharCard: ''
    });
  };

  const handleEditEmployee = (index) => {
    setEditingIndex(index);
    setFormData(employees[index]);
  };

  const handleDeleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Employee Form</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="aadharCard"
          placeholder="Aadhar Card Number"
          value={formData.aadharCard}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEmployee}>
          {editingIndex === null ? 'Add Employee' : 'Update Employee'}
        </button>
      </div>

      <h3>Employee List</h3>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <span>
              {employee.name} - {employee.email} - {employee.position} - {employee.address} - {employee.pincode} - {employee.city} - {employee.state} - {employee.aadharCard}
            </span>
            <button onClick={() => handleEditEmployee(index)}>Edit</button>
            <button onClick={() => handleDeleteEmployee(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeForm;
