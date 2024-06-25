import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box, MenuItem } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {FormValuesService} from '../types'

const vehicleTypes = [
  { value: 'Type_1_vehicle', label: 'Type 1 Vehicle' },
  { value: 'Type_2_vehicle', label: 'Type 2 Vehicle' },
  { value: 'Type_3_vehicle', label: 'Type 3 Vehicle' },
];

const schema = Yup.object().shape({
  TypeofVehicle: Yup.string().required('Mandatory to fill vehicletype'),
  VehiclemodelNumber: Yup.string().required('Mandatory to fill vehicle model number'),
});

const ServiceDetails: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm<FormValuesService>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValuesService) => {
    console.log(data);
    navigate('/booking-details', { state: data });
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>Service Details</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Controller
          name="TypeofVehicle"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Type of Vehicle"
              select
              error={!!errors.TypeofVehicle}
              helperText={errors.TypeofVehicle?.message}
              fullWidth
            >
              {vehicleTypes.map((vehicle) => (
                <MenuItem key={vehicle.value} value={vehicle.value}>
                  {vehicle.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          name="VehiclemodelNumber"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Vehicle Model Number"
              error={!!errors.VehiclemodelNumber}
              helperText={errors.VehiclemodelNumber?.message}
              fullWidth
            />
          )}
        />
        <Button variant="contained" color="primary" type="submit">Next</Button>
      </Box>
    </Container>
  );
};

export default ServiceDetails;
