import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Column = styled.View`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 20px;
  width: 200px;
`;

export const CircularImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const GradientCircularImage = styled.View`
  background-color: #FC0B7B;
  border-radius: 300px;
  display: flex;
  align-items: center;
  height: 110px;
  justify-content: center;
  overflow: hidden;
  width: 110px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 18em;
  margin-left: 10px;
`;