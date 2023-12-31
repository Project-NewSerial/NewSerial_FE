import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  box-sizing: border-box;
  font-family: NanumSquareNeo;
  font-size: 14px;
`;

export const Logo = styled.div`
  font-family: Bangers;
  color: #ff6f4f;
  font-size: 30px;
`;

export const InputContent = styled.div`
  width: 100%;
  margin-top: 90px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
  position: relative;

  .input-box__button {
    width: 50px;
    height: 20px;
    border: 1px solid #ff6f4f;
    color: #ff6f4f;
    border-radius: 15px;
    font-family: Noto Sans KR;
    font-size: 12px;
    position: absolute;
    right: 0;
    top: 15px;
    text-align: center;
  }
`;

export const InputText = styled.div`
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid white;
  background-color: black;
  color: white;
  font-family: NanumSquareNeo;
  font-size: 14px;
  color: white;

  &:focus {
    outline: none;
    border-bottom: 2px solid white;
  }
`;

export const Button = styled.div`
  width: 75px;
  height: 30px;
  background-color: white;
  color: black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;
