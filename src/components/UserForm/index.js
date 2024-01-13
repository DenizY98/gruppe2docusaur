import React, { useState } from 'react';
import './UserForm.css';
const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    apiurl: '',
    password: '',
    longitude: '',
    latitude: '',
    homename: '',
    sensors: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    // Regex patterns for validation
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    const coordinatePattern = /^-?\d+(\.\d+)?$/;

    if (!formData.username.trim()) errors.username = 'Username is required';
    if (!urlPattern.test(formData.apiurl)) errors.apiurl = 'Invalid API URL';
    if (!formData.password) errors.password = 'Password is required';
    if (!coordinatePattern.test(formData.longitude)) errors.longitude = 'Invalid longitude';
    if (!coordinatePattern.test(formData.latitude)) errors.latitude = 'Invalid latitude';
    if (!formData.homename.trim()) errors.homename = 'Home name is required';
    if (!formData.sensors.trim()) errors.sensors = 'At least one sensor is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('User created successfully');
        setFormData({ // Clear form after successful submission
          username: '',
          apiurl: '',
          password: '',
          longitude: '',
          latitude: '',
          homename: '',
          sensors: ''
        });
      } else {
        alert('Error creating user');
      }
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <div className="user-form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" name="username" placeholder="Benutzername" value={formData.username} onChange={handleChange} required />
        {formErrors.username && <p>{formErrors.username}</p>}
        <input type="text" name="apiurl" placeholder="Homeassistant-api-url http://w.x.y.z:8123/api/" value={formData.apiurl} onChange={handleChange} required />
        {formErrors.apiurl && <p>{formErrors.apiurl}</p>}
        <input type="password" name="password" placeholder="Homeassistant-api-token like eyGabGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" value={formData.password} onChange={handleChange} required />
        {formErrors.password && <p>{formErrors.password}</p>}
        <input type="text" name="longitude" placeholder="Longitude like 48.123456" value={formData.longitude} onChange={handleChange} required />
        {formErrors.longitude && <p>{formErrors.longitude}</p>}
        <input type="text" name="latitude" placeholder="Latitude like 12.123456" value={formData.latitude} onChange={handleChange} required />
        {formErrors.latitude && <p>{formErrors.latitude}</p>}
        <input type="text" name="homename" placeholder="Home Name like Balkonkraftwerk Stgt" value={formData.homename} onChange={handleChange} required />
        {formErrors.homename && <p>{formErrors.homename}</p>}
        <input type="text" name="sensors" placeholder="Sensors like Key:'value' comma-separated Heute:'sensor.daily_energy'" value={formData.sensors} onChange={handleChange} required />
        {formErrors.sensors && <p>{formErrors.sensors}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};


export default UserForm;