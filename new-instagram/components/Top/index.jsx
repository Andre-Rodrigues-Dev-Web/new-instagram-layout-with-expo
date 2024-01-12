import { ButtonAdd, Container, Header, Logo } from './style'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Top = () => {
  return (
    <Header>
        <Container>
           <ButtonAdd>
            <AntDesign name="pluscircleo" size={32} color="#fff" />
           </ButtonAdd>
           <Logo>Instagram</Logo>
           <ButtonAdd>
            <Ionicons name="chatbubble-outline" size={32} color="#fff" />
           </ButtonAdd>
        </Container>
    </Header>
  )
}

export default Top;