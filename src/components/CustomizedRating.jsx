import { Box, Typography, Rating, Stack, Card, CardMedia, CardContent } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function RatingsBlock() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Heading with Icon */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <StarHalfIcon color="primary" />
        <Typography variant="h6" fontWeight="bold" color="primary">
          Project Ratings
        </Typography>
      </Stack>

      {/* Ratings */}
      <Stack alignItems="flex-start">
        <Rating name="advisor-rating" defaultValue={4.5} max={5} precision={0.5} />
        <Typography variant="caption" sx={{ ml: 10 }}><b><i>– Thesis Advisor</i></b></Typography>
      </Stack>

      <Stack alignItems="flex-start">
        <Rating name="mayo-rating" defaultValue={4.5} max={5} precision={0.5} />
        <Typography variant="caption" sx={{ ml: 10 }}><b><i>– Mayo Clinic Oncologists</i></b></Typography>
      </Stack>

      <Stack alignItems="flex-start">
        <Rating name="advisor-rating" defaultValue={5} max={5} precision={0.5} />
        <Typography variant="caption" sx={{ ml: 10 }}><b><i>– Pythagoras - "Whack!"</i></b></Typography>
      </Stack>

      <Stack alignItems="flex-start">
        <Rating name="advisor-rating" defaultValue={5} max={5} precision={0.5} />
        <Typography variant="caption" sx={{ ml: 10 }}><b><i>– Euclid - "Nothing like this is out there!"</i></b></Typography>
      </Stack>


      <Stack alignItems="flex-start">
        <StyledRating
          name="ex-rating"
          defaultValue={0.5}
          precision={0.5}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <Typography variant="caption" sx={{ ml: 10 }}><b><i>– Ex-Girlfriend</i></b></Typography>
      </Stack>
    </Box>
  );
}

export default function RatingsWithSweeneyCard() {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
      {/* Ratings Block */}
      <Box flex={1}>
        <RatingsBlock />
      </Box>

      {/* Sydney Sweeney Card */}
      <Box flex={1} display="flex" justifyContent="center">
        <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: 4, backgroundColor: '#ffffff' }}>
          <CardMedia
            component="img"
            height="300"
            image="Sydeny Sweeney.jpg"
            alt="Sydney Sweeney"
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="primary">
              Rumored Ex-Girlfriend
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
