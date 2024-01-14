import React, { useState, useEffect } from 'react';
import './UserConfig.css';

const UserConfig = () => {
    const [userIds, setUserIds] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [userData, setUserData] = useState({
        username: '',
        apiurl: '',
        longitude: '',
        latitude: '',
        homename: '',
        sensors: ''
    });
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});

    // Regex patterns for validation
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    const coordinatePattern = /^-?\d+(\.\d+)?$/;

    useEffect(() => {
        // Fetch the list of user IDs
        fetch('https://api.yueksel.me/api/ids')
            .then(response => response.json())
            .then(data => setUserIds(data))
            .catch(error => console.error('Error fetching user IDs:', error));
    }, []);

    const [currentPassword, setCurrentPassword] = useState(''); // Add a state to store the current password

    useEffect(() => {
        // Fetch the user data when a new ID is selected
        if (selectedUserId) {
            fetch(`https://api.yueksel.me/api/users/${selectedUserId}`)
                .then(response => response.json())
                .then(data => {
                    const userData = data[0];
                    setUserData({
                        username: userData.username,
                        apiurl: userData.apiurl,
                        longitude: userData.longitude.toString(),
                        latitude: userData.latitude.toString(),
                        homename: userData.homename,
                        sensors: userData.sensors
                    });
                    setCurrentPassword(userData.password); // Save the current password
                })
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [selectedUserId]);

    // ... (rest of your component)

    const validateForm = () => {
        const errors = {};
        if (!userData.username.trim()) errors.username = 'Username is required';
        if (!urlPattern.test(userData.apiurl)) errors.apiurl = 'Invalid API URL';
        if (!coordinatePattern.test(userData.longitude)) errors.longitude = 'Invalid longitude';
        if (!coordinatePattern.test(userData.latitude)) errors.latitude = 'Invalid latitude';
        if (!userData.homename.trim()) errors.homename = 'Home name is required';
        if (!userData.sensors.trim()) errors.sensors = 'At least one sensor is required';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSelectChange = (e) => {
        setSelectedUserId(e.target.value);
    };

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return; // Stop submission if validation fails
        }
        const updatedUserData = { ...userData };
        if (password) {
            updatedUserData.password = password; // Use the new password if provided
        } else {
            updatedUserData.password = currentPassword; // Otherwise, use the current password
        }
        try {
            const response = await fetch(`https://api.yueksel.me/api/users/${selectedUserId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUserData),
            });
            if (response.ok) {
                alert('User updated successfully');
            } else {
                alert('Error updating user');
            }
        } catch (error) {
            alert('Error submitting form');
        }
    };

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this user?')) {
            return;
        }
        try {
            const response = await fetch(`https://api.yueksel.me/api/users/${selectedUserId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('User deleted successfully');
                setUserIds(userIds.filter(id => id !== selectedUserId));
                setSelectedUserId('');
                setUserData({
                    username: '',
                    apiurl: '',
                    longitude: '',
                    latitude: '',
                    homename: '',
                    sensors: ''
                });
                setPassword('');
            } else {
                alert('Error deleting user');
            }
        } catch (error) {
            alert('Error deleting user');
        }
    };

    return (
        <div className="user-config-container">
            <select onChange={handleSelectChange} value={selectedUserId}>
                <option value="">Select a Sensor ID</option>
                {userIds.map(id => (
                    <option key={id} value={id}>{id}</option>
                ))}
            </select>
            <form onSubmit={handleSubmit} className="user-config-form">
                <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleChange} required />
                {formErrors.username && <p>{formErrors.username}</p>}
                <input type="text" name="apiurl" placeholder="API URL" value={userData.apiurl} onChange={handleChange} required />
                {formErrors.apiurl && <p>{formErrors.apiurl}</p>}
                <input type="text" name="longitude" placeholder="Longitude" value={userData.longitude} onChange={handleChange} required />
                {formErrors.longitude && <p>{formErrors.longitude}</p>}
                <input type="text" name="latitude" placeholder="Latitude" value={userData.latitude} onChange={handleChange} required />
                {formErrors.latitude && <p>{formErrors.latitude}</p>}
                <input type="text" name="homename" placeholder="Home Name" value={userData.homename} onChange={handleChange} required />
                {formErrors.homename && <p>{formErrors.homename}</p>}
                <input type="text" name="sensors" placeholder="Sensors" value={userData.sensors} onChange={handleChange} required />
                {formErrors.sensors && <p>{formErrors.sensors}</p>}
                <input type="password" name="password" placeholder="New Password" value={password} onChange={handlePasswordChange} />
                <div className="button-container">
                    <button type="submit" className="update-button">Update</button>
                    <button type="button" onClick={handleDelete} className="delete-button">Delete</button>
                </div>
            </form>
        </div>
    );
};

export default UserConfig;