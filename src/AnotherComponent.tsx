// AnotherComponent.tsx
//import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';

// Define the interface for the user details
interface UserDetail {
    name: string;
    phoneNumber: string;
    email: string;
  }
  

  const AnotherComponent = () => {
    const [userDetails, setUserDetails] = useState<UserDetail>({ name: '', phoneNumber: '', email: '' });
  

  useEffect(() => {
    // Retrieve user details from local storage
    const storedUserDetails = localStorage.getItem('userDetails');
    const parsedUserDetails = storedUserDetails ? JSON.parse(storedUserDetails) : {};

    // Update the state with the retrieved user details
    setUserDetails(parsedUserDetails);
  }, []);

  // Now you can use 'userDetails' in your component
  // For example, you can display the user's name:
  return (
    <div>
      <h2>Hello, {userDetails.name}!</h2>
      <p>Phone Number: {userDetails.phoneNumber}</p>
      <p>Email: {userDetails.email}</p>
    </div>
  );
};

export default AnotherComponent;
