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
  const [comment, setComment] = useState(false)

  async function onSubmit(data) {
    const res = await fetch('api/contact',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (res.status === 200) {
      setSubmitting(true)
      setComment('メッセージを送信しました😃')
    } else {
      setSubmitting(true)
      setComment('メッセージの送信に失敗しました😥後日またご連絡ください')
    }
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
            textAlign='center'
            sx={{
              width: '100%',
            }}
          >
            Contact
          </Typography>
          <Typography
            textAlign='center'
            sx={{
              width: '100%',
              mb: 5,
            }}
          >
            ご意見、ご要望などをいただけると嬉しいです。
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
            variant='contained'
            color='secondary'
            size='large'
            sx={{ mx:'auto', width:'100%', maxWidth: '200px', mt: 3 }}
            onClick={ handleSubmit(onSubmit) }
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
          <Typography
            variant='body2'
            textAlign='center'
            sx={{
              width: '100%',
            }}
          >
            { comment }
          </Typography>
        </Grid>
    </Container>
  );
}
