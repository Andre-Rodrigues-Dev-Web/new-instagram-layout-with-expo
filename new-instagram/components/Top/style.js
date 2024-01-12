import styled from 'styled-components/native';

const Header = styled.View`
  background-color: #181818;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
  padding: 40px 10px;
`;

const ButtonAdd = styled.TouchableOpacity`
  background-color: transparent;
`;

const Logo = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export { Header, Container, ButtonAdd, Logo };
