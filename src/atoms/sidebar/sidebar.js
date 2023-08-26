import React from 'react'
import Logo from '../../assets/logo.svg'
import Logoname from '../../assets/logoName.svg'
import Token from '../../assets/tokenlogo.svg'
import Pair from '../../assets/pairlogo.svg'

import Facebook from '../../assets/facebook.svg'
import Linkedin from '../../assets/linkedin.svg'
import Twitter from '../../assets/twitter.svg'

import * as Styled from "./style";
import { useNavigate } from 'react-router-dom'
import { commonConstants } from '../../commonconstants/CommonConstants'
const Sidebar = () => {
  const navigate=useNavigate()
  return (
    <Styled.MainDiv>
  <Styled.SubDiv2>
  <Styled.SubDivMain>
        <img src={Logo} alt={commonConstants?.img} />
        <img src={Logoname} alt={commonConstants?.img} />
        </Styled.SubDivMain>

        <Styled.SubDiv onClick={()=>navigate("/")}>
            <img src={Token} alt={commonConstants?.img} />
            <p className='Para' >{commonConstants?.Token_Address}</p>
        </Styled.SubDiv>
        <Styled.SubDiv  onClick={()=>navigate("/pair")}>
            <img src={Pair} alt={commonConstants?.img} />
            <p className='Para'>{commonConstants?.Pair_Address}</p>
        </Styled.SubDiv>
        <Styled.IconDiv>
          <img src={Facebook} alt={commonConstants?.img} />
          <img src={Linkedin} alt={commonConstants?.img} />
          <img src={Twitter} alt={commonConstants?.img} />
        </Styled.IconDiv>
  </Styled.SubDiv2>
    </Styled.MainDiv>
  )
}

export default Sidebar