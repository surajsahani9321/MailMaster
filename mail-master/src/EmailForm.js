import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container } from '@mui/material';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs.send('techsurajsahani', 'mailmaster', data, 'HvVruA2ogbtnZ9EKK')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.error('FAILED...', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="To"
          {...register('to', { required: 'To is required' })}
          error={!!errors.to}
          helperText={errors.to?.message}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Subject"
          {...register('subject')}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Message"
          {...register('message', { required: 'Message is required' })}
          error={!!errors.message}
          helperText={errors.message?.message}
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Send Email
        </Button>
      </form>
    </Container>
  );
};

export default EmailForm;
