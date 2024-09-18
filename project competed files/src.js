import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('/patients')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the patients!', error);
      });
  }, []);

  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>{patient.first_name} {patient.last_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
import React, { useState } from 'react';
import axios from 'axios';

function AddPatient() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPatient = { first_name: firstName, last_name: lastName, email: email };

    axios.post('/patients', newPatient)
      .then(response => {
        alert('Patient added successfully!');
      })
      .catch(error => {
        console.error('There was an error adding the patient!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Add Patient</button>
    </form>
  );
}

export default AddPatient;
