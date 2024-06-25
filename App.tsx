import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalDetails from './components/PersonalInfo';
import ServiceDetails from './components/ServiceSelection';
import BookingDetails from './components/BookingDetails';
import SuccessPage from './components/Confirmation';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetails />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/booking-details" element={<BookingDetails />} />'bookingtime',data.appointmentTime
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}
export default App;