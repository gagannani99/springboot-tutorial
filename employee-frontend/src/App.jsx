import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import EditEmployeeForm from "./components/EditEmployeeForm";
import { getEmployees } from "./api/employeeService";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);

  const fetchEmployees = () => {
    getEmployees().then((res) => setEmployees(res.data));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (emp) => {
    setEditingEmployeeId(emp.id);
  };

  const handleUpdateSuccess = () => {
    setEditingEmployeeId(null);
    fetchEmployees();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Employee Management System</h1>

      {editingEmployeeId ? (
        <EditEmployeeForm
          employeeId={editingEmployeeId}
          onUpdateSuccess={handleUpdateSuccess}
          onCancel={() => setEditingEmployeeId(null)}
        />
      ) : (
        <>
          <EmployeeForm onEmployeeAdded={fetchEmployees} />
          <EmployeeList employees={employees} onEdit={handleEdit} onDelete={fetchEmployees} />
        </>
      )}
    </div>
  );
}

export default App;
