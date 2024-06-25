import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
interface BookingDetails {
  name: string;
  appointmentDate: string;
  appointmentTime: string;
}
const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetails = location.state as BookingDetails;
  const name = localStorage.getItem('name');
  return (
    <Container >
      <Box textAlign="center" mt={4}>
        <Typography variant="h3" component="h3" gutterBottom>
        Thank you, {name}!!!
        </Typography>
        <Typography variant="h4" component="h3">
          
        </Typography>
        <Typography variant="body1" mt={2}>
          Your booking Date is { bookingDetails.appointmentDate} on  {bookingDetails.appointmentTime}.
        </Typography>
        
            
        
      </Box>
    </Container>
  );
};
export default SuccessPage;
