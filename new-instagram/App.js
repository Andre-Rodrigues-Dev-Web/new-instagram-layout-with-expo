import { StatusBar } from 'expo-status-bar';
import { Layout } from './components/Containers/style';
import Top from './components/Top';
import CarouselTop from './components/CarouselTop';
import Search from './components/Search';

export default function App() {
  return (
    <Layout>
      <Top />
      <CarouselTop />
      <Search />
      <StatusBar style="auto" />
    </Layout>
  );
}

