import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';

import { api } from '../../services/api';
import { Container, H1, ContainerItens, Image, Button } from './styles';

function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }

    fetchCategories();
  }, []);

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ];

  return (
    <Container>
      <H1>Categoria</H1>
      <Carousel itemsToShow={5} breakPoints={breakpoints}>
        {categories.map(category => (
          <ContainerItens key={category.id}>
            <Image src={category.url} />
            <Button>{category.name}</Button>
          </ContainerItens>
        ))}
      </Carousel>
    </Container>
  );
}

export default Category;
