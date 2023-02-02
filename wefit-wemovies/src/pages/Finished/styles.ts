import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 24px auto;
  padding: 64px 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
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