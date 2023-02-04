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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;

  h1 {
    color: white;
    font-family: 'Roboto', sans-serif;
  }
`;