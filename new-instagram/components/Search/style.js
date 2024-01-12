import styled from 'styled-components/native';

export const ContainerSearch = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 23px;
  font-weight: bold;
`;

export const FormGoup = styled.View`
    background-color: #31323B;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    padding: 5px 20px;
    width: 60%;
`;

export const InputSearch = styled.TextInput`
    background-color: #31323B;
    border-radius: 30px;
    padding: 5px 20px;
    width: 50%;
`;