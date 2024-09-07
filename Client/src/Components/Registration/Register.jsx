import { useState } from 'react';
import './Register.css';
import axios from 'axios';

function Register() {
  const [firstname, setFirstName] = useState()
  const [middlename, setMiddleName] = useState()
  const [lastname, setLastName] = useState()
  const [email, setEmail] = useState()
  const [contact, setContact] = useState()
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('middlename', middlename);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('contact', contact);
    formData.append('file', file);

    axios.post('http://localhost:3001/register', formData)
    .then(res => console.log(res))
    .catch(err=> console.log(err))
    console.log(file);
  };

  return (
    <div className="Container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label htmlFor="middlename">Middle Name (Optional)</label>
          <input
            type="text"
            placeholder="Enter Middle Name"
            name="middlename"
            onChange={(e) => setMiddleName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="contact">Contact No#</label>
          <input
            type="text"
            placeholder="Enter Contact No#"
            name="contact"
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <label htmlFor="photo">Profile Picture</label>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
            
          />
          
          <div className="submitbtn">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
