import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import FormPage from './FormPage';
import SecondPage from './SecondPage';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/second-page">Second Page</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import FormPage from './FormPage';
// import SecondPage from './SecondPage';
// import './app.css'; // Import the app.css styles

// const App = () => {
//   // Use the useState hook to manage the form state
//   const [formData, setFormData] = useState({
//     name: '',
//     phoneNumber: '',
//     email: '',
//   });

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // Perform any actions with form data here (e.g., save to localStorage)
//     console.log('Form Data:', formData);

//     // Save the form data to local storage
//     localStorage.setItem('userDetails', JSON.stringify(formData));

//     // Reset the form after submission
//     setFormData({
//       name: '',
//       phoneNumber: '',
//       email: '',
//     });
//   };

//   return (
//     <BrowserRouter>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/second-page">Second Page</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<FormPage />} />
//         <Route path="/second-page" element={<SecondPage />} />
//       </Routes>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <TextField
//             label="Phone Number"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </BrowserRouter>
//   );
// };

// export default App;
