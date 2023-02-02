import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 24px auto;
  padding: 24px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const EmptyCart = styled.div`
  width: 100%;
  padding: 64px 0;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  img {
    margin: 32px 0;
  }

  a {
    width: 180px;
    height: 40px;

    background-color: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;

    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
`;

export const CartTable = styled.table`
  width: 100%;
  border-radius: 4px;
  border-spacing: 0;
  padding: 24px 0;

  thead th {
    text-align: left;
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    padding-bottom: 21px;
  }

  tbody td {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    padding-bottom: 21px;

    &:last-child {
      padding-left: 52px;
    }
  }

  img {
    width: 89px;
    height: 114px;
  } 

  span {
      font-size: 14px;
      font-weight: 700;
      ${({ theme }) => theme.COLORS.PRIMARY};
    }

    button {
      background: transparent;
    }
  
`;

export const DescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 253px;
  margin-left: 52px;

  strong {
      font-size: 14px;
      font-weight: 700;
      ${({ theme }) => theme.COLORS.PRIMARY};
      margin-bottom: 8px;
    }
`;

export const AmountProduct = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 62px;
    height: 26px;
    border-radius: 4px;

    color: ${({ theme }) => theme.COLORS.PRIMARY};

    padding: 16px;
    outline: none;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_LIGHT};

    margin: 0 11px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;

  button {
    width: 235.42px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.BLUE};

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;

    border-radius: 4px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    span {
      &:first-child{
        font-size: 14px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
        text-transform: uppercase;
      }

      &:last-child{
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PRIMARY};
      }
    }
  }
`;