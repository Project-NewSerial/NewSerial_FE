import styled from "@emotion/styled";

export const Container = styled.div`
  label: container;
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
  label: logo;
  font-family: Bangers;
  color: #ff6f4f;
  font-size: 30px;
`;

export const InputContent = styled.div`
  label: input-content;
  width: 100%;
  margin-top: 90px;
`;
export const InputBox = styled.div`
  label: input-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
`;

export const InputText = styled.div`
  label: input-text;
  color: white;
`;

export const Input = styled.input`
  label: input;
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
  label: button;
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

export const BottomText = styled.div`
  label: botton-text;
  color: #ff6f4f;
  font-family: Noto Sans KR;
  font-weight: 100;
  font-size: 12px;
  display: flex;
  margin-bottom: 35px;
`;
