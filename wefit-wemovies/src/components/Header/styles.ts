import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  height: 74px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24.5px 10px;
`;

export const Logo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.WHITE}
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 9.33px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  strong {
    font-size: 14px;
    font-weight: 600;
  }

  span{
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    line-height: 16px;
  }
`