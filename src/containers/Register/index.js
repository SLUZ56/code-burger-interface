import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup"
import api from '../../services/api'

import Button from '../../components/Button'
import RegisterImg from '../../assets/register-image.svg'
import Logo from '../../assets/logo.svg'

import {
  Container,
  RegisterImage,
  ContainerItems,
  Label,
  Input,
  Span,
  ErrorMessage
} from './styles'

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string('O nome é obrigatório').required(),
    email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter pelos menos 6 dígitos'),
    confirmPassword: Yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter pelos menos 6 dígitos')
  })

  const { 
    register,
    handleSubmit,
    formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.post('users', {
      name:clientData.name,
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="register-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message}/>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Label>Confirmar senha</Label>
          <Input type="password" {...register('confirmPassword')} error={errors.confirmPassword?.message}/>
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          <Button type="submit" style={{ marginTop: 20, marginBottom: 10 }}>Sign Up</Button>
        </form>
        <Span>
          Já possui conta?<a>Sign In</a>
        </Span>
      </ContainerItems>
    </Container>
  )
}

export default Register
