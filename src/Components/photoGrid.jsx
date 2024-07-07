import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const imageSets = [
  [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s',
    'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKnGZQfGZl7AaWeLFEUphgLqbbGYGOvwyvA&s',
  ],
  [
    'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
    'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKnGZQfGZl7AaWeLFEUphgLqbbGYGOvwyvA&s',
  ],
  // Add more sets of images as needed
];

export default function PhotoGrid() {
  const [currentImageSet, setCurrentImageSet] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageSet((prevSet) => (prevSet + 1) % imageSets.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Box textAlign="center" p={4}>
        <h1>Responsive Image Grid</h1>
        <p>Resize the browser window to see the responsive effect.</p>
      </Box>

      <Grid container spacing={2}>
        {imageSets[currentImageSet].map((url, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Box>
              <img src={url} alt={`image-${index}`} style={{ width: '100%' }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
