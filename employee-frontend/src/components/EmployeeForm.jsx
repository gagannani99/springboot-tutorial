import { useState } from "react";
import { createEmployee } from "../api/employeeService";

export default function EmployeeForm({ onAdd }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(employee);
    onAdd();
    setEmployee({ name: "", email: "", department: "", salary: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto mt-8"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Employee</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
        className="border p-2 w-full mb-3 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
        className="border p-2 w-full mb-3 rounded"
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
        className="border p-2 w-full mb-3 rounded"
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={employee.salary}
        onChange={handleChange}
        className="border p-2 w-full mb-3 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
      >
        Save Employee
      </button>
    </form>
  );
}
