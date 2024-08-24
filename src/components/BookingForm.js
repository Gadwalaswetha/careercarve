import React, { useState } from 'react';
import styled from 'styled-components';

const BookingWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
`;

const BookingTitle = styled.h2`
  color: #333;
`;

const BookingDetailsWrapper = styled.div`
  margin-bottom: 20px;
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const ConfirmButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

function BookingDetails({ mentor }) {
  const [duration, setDuration] = useState(30);

  const handleBooking = (e) => {
    e.preventDefault();
    // Implement booking logic here
    alert(`Booked ${mentor.name} for a ${duration}-minute session.`);
  };

  return (
    <BookingWrapper>
      <BookingTitle>Booking Details</BookingTitle>
      <BookingDetailsWrapper>
        <p><strong>Mentor:</strong> {mentor.name}</p>
        <p><strong>Expertise:</strong> {mentor.areas_of_expertise.join(', ')}</p>
      </BookingDetailsWrapper>
      <BookingForm onSubmit={handleBooking}>
        <Select value={duration} onChange={e => setDuration(e.target.value)}>
          <option value={30}>30 minutes</option>
          <option value={45}>45 minutes</option>
          <option value={60}>60 minutes</option>
        </Select>
        <ConfirmButton type="submit">Confirm Booking</ConfirmButton>
      </BookingForm>
    </BookingWrapper>
  );
}

export default BookingDetails;
