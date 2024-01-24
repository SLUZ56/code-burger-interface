import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup"

import LoginImg from '../../assets/login-img.svg'
import Logo from '../../assets/logo.svg'

import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  Button,
  Span,
  ErrorMessage
} from './styles'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter pelos menos 6 dígitos')
  })

  const { 
    register,
    handleSubmit,
    formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message}/>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit">Sign in</Button>
        </form>
        <Span>
          Não possui conta?<a>Sign Up</a>
        </Span>
      </ContainerItems>
    </Container>
  )
}

export default Login