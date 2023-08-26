import React from 'react'
import Text from '../../atoms/text/Text'
import * as Styled from './style'
import {  Data2, commonConstants } from '../../commonconstants/CommonConstants'
import SearchBar from '../../atoms/searchbar/SearchBar'
import Button from '../../atoms/button/Button'


const Pair = () => {
  return (
    <Styled.MainWrapper>
      <div className='WrapperDiv'>
    <SearchBar />
      <Button/>
    </div>
    <Styled.CoverWrapper>
        <Text text='Pair Search Results' />
        <Styled.Wrapper>
         {
          Data2.map((item)=>(
      <Styled.Card>
            <div>
            <Styled.SubCard  key={item?.id}>
          <h1>{item?.heading}</h1>
          <Styled.InsideDiv>
            <div >
            <p>{commonConstants?.Pair}</p>
              <p>{commonConstants?.Symbol}</p>
              <p>{commonConstants?.Dex}</p>
              <p>{commonConstants?.Pair_Address}</p>
            </div>
            <div>
              <p>{item?.Pair_created}</p>
              <p>{item?.symbol}</p>
              <p>{item?.DEX}</p>
              <p>{item?.Pairaddress}</p>
             <div></div>
             <div className='logo_div'>
             <img src={item?.img} alt="" className='logo' />
             </div>
            </div>
          </Styled.InsideDiv>
          </Styled.SubCard>
            </div>
        </Styled.Card>
          ))
         }
        </Styled.Wrapper>
    </Styled.CoverWrapper>
    </Styled.MainWrapper>
  )
}

export default Pair