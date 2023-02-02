import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 24px auto;
  padding: 24px 16px;
`;

export const EmptyCart = styled.div`
  width: 100%;
  padding: 64px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

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

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media screen and (max-width: 768px) {
    overflow: hidden;
    span {
      width: 60%;
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 4px;
  padding: 24px 16px;
`;

export const ProductTable = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const ProductTableHeader = styled.div`
  width: 100%;
  max-width: 691px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    text-transform: uppercase;

    &:nth-child(1){
      display: block;
      width: 167px;
      margin-right: 279px;
    }

    &:nth-child(2){
      display: block;
      width: 171px;
    }
  }

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const ProductListItem = styled.div`
  width: 100%;
  margin-top: 21px;
  display: flex;
  align-items: center;
  gap: 52px;

  padding-bottom: 21px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_LIGHT};

  img {
    width: 89px;
    height: 114px;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    gap: 16px;
    align-items: flex-start;
    border: 0;

    img {
      width: 64px;
      height: 82px;
    }
  }
`;

export const ProductDescription = styled.div`
  width: 100%;
  max-width: 253px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  strong {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    margin-bottom: 8px;
  }

  span {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    strong {
      width: 100%;
    }
    flex-direction: row;
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

    padding: 0 16px;
    outline: none;

    border: 1px solid #D9D9D9;

    margin: 0 11px;
  }

  button {
    background: transparent;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 54px ;
    left: 100px;
  }
`;

export const Subtotal = styled.span`
  display: block;
  width: 213px;

  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  @media screen and (max-width: 768px) {
    width: 98px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 45px;
    right: -30px;

    &::before {
      content: 'SUBTOTAL';
      font-size: 12px;
      color: ${({ theme }) => theme.COLORS.GRAY_LIGHT}
    }
  }
`;

export const DeleteProduct = styled.div`
  margin-left: 25px;
  button {
    background: transparent;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 21px;
  
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

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 21px 0 0 0;
    align-items: flex-end;
    gap: 16px;
    
    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    
    button {
      width: 100%;
    }
  }
`;