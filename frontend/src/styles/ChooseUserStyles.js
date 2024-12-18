import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 2em;
  background-color: #f0f8ff;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 4em;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 3em;
  }

  @media screen and (max-width: 480px) {
    padding: 1em;
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    padding: 2em;
  }
`;



export const UserSection = styled.div`
  text-align: center;
  padding: 30px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: #ffffff; 
  width: 90%;
  max-width: 300px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px); 
  }

  @media screen and (min-width: 768px) {
    padding: 40px 30px;
    margin: 0 20px;
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #34495e; 
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Button = styled(Link)`
  // background-color: #128670; 
  background-color: #27477a; 
  color: white;
  border: none;
  padding: 15px 25px;
  margin-top: 20px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1abc9c; 
    transform: translateY(-3px);
  }

  &:active {
    // background-color: #27477a; 
    background-color: #1abc9c; 
    transform: translateY(0);
  }

  @media screen and (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }
`;
