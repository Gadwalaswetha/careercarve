import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MentorListWrapper = styled.div`
  margin-top: 20px;
`;

const MentorCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MentorInfo = styled.div``;

const MentorName = styled.h2`
  margin: 0;
  color: #333;
`;

const MentorExpertise = styled.p`
  color: #777;
`;

const BookButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function MentorList({ setSelectedMentor }) {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/mentors')
      .then(response => setMentors(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <MentorListWrapper>
      {mentors.map(mentor => (
        <MentorCard key={mentor.id}>
          <MentorInfo>
            <MentorName>{mentor.name}</MentorName>
            <MentorExpertise>{mentor.areas_of_expertise.join(', ')}</MentorExpertise>
          </MentorInfo>
          <BookButton onClick={() => setSelectedMentor(mentor)}>
            Book Session
          </BookButton>
        </MentorCard>
      ))}
    </MentorListWrapper>
  );
}

export default MentorList;

