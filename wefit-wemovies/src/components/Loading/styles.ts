import styled from 'styled-components';

export const Container = styled.div`
  width: 55.41px;
  height: 55.41px;
  border: 3px solid  rgba(128, 128, 128);
  border-bottom-color: #fff;
  border-radius: 100%;

  position: absolute;
  left: calc(50% - 55.41px);
  top: calc(50% - 55.41px);

  animation: rotate 1s linear infinite;

  @keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;