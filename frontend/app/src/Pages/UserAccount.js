import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePage.css'; // Import CSS file for styling

const UserAccount = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="profile-page">
      {user ? (
        <>
          <div className="profile-card">
            <h2>Profile Picture</h2>
            <img src={user.profilePicture} alt="Profile" />
          </div>
          <div className="profile-card">
            <h2>User Information</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Add more user information fields here */}
          </div>
          <div className="profile-card">
            <h2>Notifications</h2>
            {/* Add notification content here */}
          </div>
        </>
      ) : (
        <p>Loading user account details...</p>
      )}
    </div>
  );
};

export default UserAccount;
