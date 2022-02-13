import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography
} from '@mui/material'
import { red } from '@mui/material/colors'

export default function RaviewCard({ name, color, ratingValue, comment }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color[500] }} aria-label={`${name} profile letter`}>
            {name.slice(0, 2).toUpperCase()}
          </Avatar>
        }
        title={name}
      />
      <CardContent>
        <Rating value={ratingValue} precision={0.5} readOnly />
        <Typography variant='body2' color='text.secondary'>
          {comment}
        </Typography>
      </CardContent>
    </Card>
  )
}
