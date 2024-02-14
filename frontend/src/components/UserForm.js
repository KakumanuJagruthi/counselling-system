import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const UserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    subscribe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation logic
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);

    // If there are no errors, navigate to the confirmation page
    if (Object.keys(newErrors).length === 0) {
      navigate('/confirmation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
      <br />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
      <br />
      <TextField
        select
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
        error={!!errors.gender}
        helperText={errors.gender}
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </TextField>
      <br />
      <FormControlLabel
        control={
          <Checkbox
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleCheckboxChange}
          />
        }
        label="Subscribe to newsletter"
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default UserForm;
