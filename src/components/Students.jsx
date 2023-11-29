'use client'
import React, { useState, useEffect } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/getStudents')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data.students);
      })
      .catch((error) => {
        setError('Error fetching students: ' + error.message);
      });
  }, []);

  return (
    <div className="text-black flex flex-col mb-auto">
      <h1 className="text-black text-xl font-extrabold">Students List</h1>
      <ul className="text-lg font-bold">
        {students.map((student) => (
          <li key={student.id}>
            {student.firstName} {student.lastName}, {student.dob}, Grade {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;