import styled from 'styled-components';

// 색상 상수
import {
  grey1,
  grey2,
  white,
  primary,
  primaryHover,
} from '@/styles/colors';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  background-color: ${grey1}20; 
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: ${grey1};
`;

export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  color: ${grey2};
  background-color: ${white};
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  color: ${white};
  background: ${primary};       
  border-radius: 4px;

  &:hover {
    background: ${primaryHover}; 
  }
`;
