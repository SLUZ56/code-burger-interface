import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginImage = styled.img`
  height: 70%;
`
export const ContainerItems = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 65px;
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    color: #fff;
    text-align: center;
    margin-top: 100px;
  }
`
export const Label = styled.p`
  font-style: normal;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #fff;
  margin: 28px 0px 5px 0px;
`
export const Input = styled.input`
  width: 391.42px;
  height: 39px;
  background: #fff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${ props => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
`
export const Button = styled.button`
  width: 182.81px;
  height: 36.13px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  font-style: normal;
  text-align: center;
  color: #eee;
  margin: 55px 0px 15px 0px;
  padding: 15px;
  line-height: 4px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
export const Span = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #fff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 2px;

`
