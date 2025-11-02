import React, { useState, useEffect } from "react";
import { updateEmployee, getEmployeeById } from "../api/employeeService";

const EditEmployeeForm = ({ employeeId, onUpdateSuccess, onCancel }) => {
  const [employee, setEmployee] = useState({ name: "", email: "", department: "" });

  useEffect(() => {
    getEmployeeById(employeeId).then((res) => setEmployee(res.data));
  }, [employeeId]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(employeeId, employee).then(() => {
      onUpdateSuccess();
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border rounded p-2"
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          placeholder="Department"
          className="w-full border rounded p-2"
        />
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Update
          </button>
          <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployeeForm;
