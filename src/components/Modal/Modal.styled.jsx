import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  label {
    display: inline-flex;
    align-items: baseline;
  }

  input {
    margin-left: 5px;
  }

  button {
    display: block;
    margin-top: 20px;
  }

  .modal {
    padding: 20px;
    min-width: 400px;
    max-width: 50%;
    overflow: hidden;

    background-color: aliceblue;
  }
`;
