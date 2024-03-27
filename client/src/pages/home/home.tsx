import { Box, Card, CardMedia, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CategoryHeader from '../../shared/components/categoryHeader';
import { images } from '../../shared/components/imagesDict';
import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';

export default function Home() {
  const searchTerm = useSelector((state: RootState) => state.searchTerm.value);

  const options = {
    keys: ['name'],
    threshold: 0.5,
  };

  const fuse = new Fuse(images, options);
  const result = fuse.search(searchTerm);

  const filteredImages = searchTerm ? result.map(({ item }) => item) : images;

  useEffect(() => {
    fetch('/key')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .catch((error) => console.log('Fetch error: ', error));
  }, []);

  return (
    <Box sx={{ mb: 8 }}>
      <CategoryHeader />
      <Box sx={{ mt: 3, p: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {filteredImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{ borderRadius: '20px', maxWidth: '90%', margin: 'auto' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 500,
                  }}
                  image={image.src}
                  alt={image.name}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
