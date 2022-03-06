import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function ContactForm() {

  const schema = yup.object({
    name: yup.string().required("Full name field is required"),
    email: yup.string()
      .email("Invalid email")
      .required("Email field is required"),
    message: yup.string().required("Message field is required"),
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  })
  const [isSubmitting, setSubmitting] = useState(false)

  async function onSubmit(data) {
    const res = await fetch('api/contact',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(await res.status)
  }

  return (
    <Container
      component="section"
      maxWidth='md'
    >
        <Grid container my={5} gap={2}
          flexDirection='column'
          justifyContent='center'
        >
          <Typography
            component='h2'
            variant='h3'
            textAlign='left'
            gutterBottom
            sx={{ width: '100%' }}
          >
            Contact
          </Typography>
          <TextField label='name'
            {...register('name')}
            error={'name' in errors}
            helperText={errors.name?.message}
          />
          <TextField label='email'
            type='email'
            {...register('email')}
            error={'email' in errors}
            helperText={errors.email?.message}
          />
          <TextField label='message'
            multiline
            rows={8}
            {...register('message')}
            error={'message' in errors}
            helperText={errors.message?.message}
          />
          <Button 
            variant='outlined'
            sx={{ mx:'auto', width:'100%', maxWidth: '200px' }}
            onClick={ handleSubmit(onSubmit) }
            type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Grid>
    </Container>
  );
}
