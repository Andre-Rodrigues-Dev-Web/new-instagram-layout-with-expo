import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Column, CircularImage, Container, GradientCircularImage, Name } from './style';

const CarouselTop = () => {
  const data = [
    { id: 1, image: { uri: 'https://w.dental/blog/wp-content/uploads/2022/01/pessoas-com-dentes-grandes.jpg' }, text: 'User' },
    { id: 2, image: { uri: 'https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg' }, text: 'User 2' },
    { id: 3, image: { uri: 'https://st3.depositphotos.com/13193658/32317/i/450/depositphotos_323173410-stock-photo-mad-curly-teenager-showing-thumbs.jpg' }, text: 'User 3' },
    { id: 4, image: { uri: 'https://w.dental/blog/wp-content/uploads/2022/01/pessoas-com-dentes-grandes.jpg' }, text: 'User 4' },
    { id: 5, image: { uri: 'https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg' }, text: 'User 2' },
  ];

  const renderItem = ({ item }) => (
    <Column>
      <GradientCircularImage>
        <CircularImage source={item.image} />
      </GradientCircularImage>
      <View style={{ marginTop: 10 }}>
        <Name>{item.text}</Name>
      </View>
    </Column>
  );

  return (
    <Container>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={120}
        layout={'default'}
      />
    </Container>
  );
};

export default CarouselTop;
