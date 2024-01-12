import { ContainerSearch, FormGoup, InputSearch, Title } from './style'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Search = () => {
  return (
    <ContainerSearch>
        <Title>Explorar</Title>
        <FormGoup>
            <Ionicons name="search-outline" size={32} color="#fff" />
            <InputSearch />
        </FormGoup>
    </ContainerSearch>
  )
}

export default Search;