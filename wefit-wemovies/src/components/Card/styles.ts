import styled from 'styled-components'

type ButtonTypeStyleProps = {
  isActive: boolean
}

export const Container = styled.div`
  width: 309.33px;
  height: 305px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 11px;

  border-radius: 4px;

  img {
    width: 147px;
    height: 188px;
  }

  strong {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 12px;
    font-weight: 700;
    margin-top: 7px;
  }

  & > span {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Button = styled.button<ButtonTypeStyleProps>`
  width: 100%;
  height: 40px;
  margin-top: 8px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN : theme.COLORS.BLUE};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  border-radius: 4px;
  padding: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;

    & > span {
      font-size: 12px;
    }
  }

  & > span {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;