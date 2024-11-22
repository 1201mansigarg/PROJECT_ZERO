import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  min-width: 100vw; 
  background: #ecf0f1; 
  font-family: "Arial", sans-serif;
  color: #000;
  margin: 0; 
  padding: 0; 
  overflow: hidden; 
`;



export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px; 
  background: #34495e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow: hidden;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #ddd;
  }

  &:focus {
    border: 2px solid #fff;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const SubmitButton = styled(Link)`
  width: 100%;
  padding: 12px 15px;
  margin: 20px 0;
  background-color: #16a085;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #1abc9c;
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;
