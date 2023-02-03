import goIndie from '@/assets/images/goIndie.svg';
import styled from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { useEffect, useState } from 'react';

export default function App() {
  const [qualquer, setQualquer] = useState('');
  console.log(typeof qualquer);

  useEffect(() => {
    fetch('http://localhost:5000/status', {
      method: 'GET'
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setQualquer(data);
      });
  }, []);
  
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
  }
`;