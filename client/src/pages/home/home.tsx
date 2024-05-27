import { useContext } from 'react';
import {
  Box,
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CategoryHeader from '../../shared/components/categoryHeader';
import BookData from '../../shared/interfaces/bookData';
import { AuthContext } from '../../context/AuthContext';

export default function Home() {
  const bookData = useSelector((state: RootState) => state.searchTerm.bookData);
  const currentUser = useContext(AuthContext);

  return (
    <Box sx={{ mb: 8 }}>
      <CategoryHeader />
      <Typography>
        {currentUser ? `Logged in as ${currentUser.email}` : 'Not logged in'}
      </Typography>
      <Box sx={{ mt: 3, p: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {bookData.map((book: BookData, index: number) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{
                transform: `translateY(${index % 2 === 0 ? '10px' : '-10px'})`,
              }}
            >
              <Card
                sx={{
                  borderRadius: '20px',
                  maxWidth: '80%',
                  margin: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // add this line
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 300,
                    objectFit: 'cover',
                  }}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <CardContent
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <Typography variant="h5" component="div">
                    {book.volumeInfo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(', ')
                      : 'No authors listed'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
