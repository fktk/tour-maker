import { Container, Grid, Typography } from '@mui/material'
import ReviewCard from './ReviewCard'

import { red, orange, blueGrey } from '@mui/material/colors'

export default function SectionReview() {

  const reviews = [
    {
      name: 'Alex',
      color: red,
      ratingValue: 5,
      comment: 'I never taste something like this before. Japanese mix Western cuisine. Some good, some weird taste to me. Overall the cooking tastes good.',
    },
    {
      name: 'Mona',
      color: blueGrey,
      ratingValue: 3,
      comment: 'I never taste something like this before. Japanese mix Western cuisine. Some good, some weird taste to me. Overall the cooking tastes good.',
    },
    {
      name: 'Shanen',
      color: orange,
      ratingValue: 4.5,
      comment: 'I never taste something like this before. Japanese mix Western cuisine. Some good, some weird taste to me. Overall the cooking tastes good.',
    },
  ]

  return (
    <Container maxWidth='md' sx={{ my: 15 }}>
      <Typography variant='h2' textAlign='center' sx={{ mb: 10 }}>
        Customer Review
      </Typography>
      <Grid container spacing={2}>
        {
          reviews.map((review, i) => (
            <Grid
              key={`${i}`}
              container
              item
              justifyContent='center'
              xs={12}
              sm={6}
              md={4}
            >
              <ReviewCard {...review} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}
