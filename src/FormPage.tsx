import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styles from './FormPage.module.css';

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.phoneNumber || !formData.email) {
      setErrorMessage('Please fill in all the required fields.');
    } else {
      localStorage.setItem('userDetails', JSON.stringify(formData));
      navigate('/second-page');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className={styles.inputField}
        />
      </div>
      <div>
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
          className={styles.inputField}
        />
      </div>
      <div>
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className={styles.inputField}
        />
      </div>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

      <Button type="submit" variant="contained" color="primary" className={styles.submitButton}>
        Submit
      </Button>
    </form>
  );
};

export default FormPage;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import styles from './FormPage.module.css';

// const FormPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     phoneNumber: '',
//     email: '',
//   });

//   // Validation
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // Check if all required fields are filled
//     if (!formData.name || !formData.phoneNumber || !formData.email) {
//       setErrorMessage('Please fill in all the required fields.');
//     } else {
//       // If all fields are filled, save the form data to local storage
//       console.log('Form Data:', formData);
//       localStorage.setItem('userDetails', JSON.stringify(formData));

//       // Navigate to the second page after form submission
//       navigate('/second-page');
//     }
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <div>
//         <TextField
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//           className={styles.input}
//         />
//       </div>
//       <div>
//         <TextField
//           label="Phone Number"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleInputChange}
//           required
//           className={styles.input}
//         />
//       </div>
//       <div>
//         <TextField
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//           className={styles.input}
//         />
//       </div>

//       {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

//       <Button type="submit" variant="contained" color="primary" className={styles.button}>
//         Submit
//       </Button>
//     </form>
//   );
// };

// export default FormPage;
