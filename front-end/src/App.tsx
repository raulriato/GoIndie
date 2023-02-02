import goIndie from '@/assets/images/goIndie.svg';
import styled from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={goIndie} alt="asdasd" />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;