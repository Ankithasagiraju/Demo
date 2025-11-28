import React, { useState } from 'react';
import './App.css';

// Generate dummy student data
const generateStudents = () => {
  const students = [];
  for (let i = 1; i <= 50; i++) {
    students.push({
      id: i,
      name: `Student ${i}`,
      email: `student${i}@example.com`,
    });
  }
  return students;
};

function App() {
  const students = generateStudents();
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  const totalPages = Math.ceil(students.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const endIndex = startIndex + studentsPerPage;
  const currentStudents = students.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="App">
      <h1>Student List</h1>
      <ul>
        {currentStudents.map(student => (
          <li key={student.id}>
            <strong>{student.name}</strong> - {student.email}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;