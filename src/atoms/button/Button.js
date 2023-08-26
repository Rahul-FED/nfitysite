import React from 'react'
import * as Styled from './style'
import { commonConstants } from '../../commonconstants/CommonConstants'
const Button = () => {
  return (
    <Styled.Buttons>{commonConstants?.connect}</Styled.Buttons>
  )
}

export default Button