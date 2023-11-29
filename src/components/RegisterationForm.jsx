'use client'
import React, { useState } from 'react';

const RegisterationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: '',
  });

  const [submitted, setSubmitted] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/addStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setSubmitted(true);
        setError(false);
        setFormData({
          firstName: '',
          lastName: '',
          dob: '',
          grade: '',
        });
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="text-black font-bold mt-24">
      <h2 className="text-2xl">Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-black pt-4">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter"
            className="w-full p-2 mb-3 text-black border-b-2 focus:outline-none rounded"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-black pt-4">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter"
            className="w-full p-2 mb-3 text-black border-b-2 focus:outline-none rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-black pt-4">
            Date of Birth
          </label>
          <input
            type="text"
            name="dob"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="Enter"
            className="w-full p-2 mb-3 text-black border-b-2 focus:outline-none rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="grade" className="block text-sm font-medium text-black pt-4">
            Grade
          </label>
          <input
            type="text"
            name="grade"
            id="grade"
            value={formData.grade}
            onChange={handleChange}
            placeholder="Enter"
            className="w-full p-2 mb-3 text-black border-b-2 focus:outline-none rounded"
            required
          />
        </div>


        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-black text-white font-bold py-2 px-4 mb-6 rounded-full"
          >
            Register
          </button>
        </div>
        {error && <div className="error">An error occurred. Please try again.</div>}
        {submitted && <div className="success">Student added successfully!</div>}
      </form>
    </div>
  );
};

export default RegisterationForm;
