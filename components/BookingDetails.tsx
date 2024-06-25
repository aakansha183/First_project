import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {FormValuesBooking} from '../types';

const schema = Yup.object().shape({
  appointmentDate: Yup.string().required('Appointment date is required'),
  appointmentTime: Yup.string().required('Appointment time is required'),
});

const BookingDetails: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm<FormValuesBooking>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValuesBooking) => {
    // Save data to local storage
    localStorage.setItem('appointmentDate', data.appointmentDate);
    localStorage.setItem('appointmentTime', data.appointmentTime);

    // Navigate to the next page
    navigate('/success', { state: data });
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Booking Details
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Controller
          name="appointmentDate"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Appointment Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              error={!!errors.appointmentDate}
              helperText={errors.appointmentDate?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="appointmentTime"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Appointment Time"
              type="time"
              InputLabelProps={{ shrink: true }}
              error={!!errors.appointmentTime}
              helperText={errors.appointmentTime?.message}
              fullWidth
            />
          )}
        />
        <Button variant="contained" color="primary" type="submit">
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default BookingDetails;
