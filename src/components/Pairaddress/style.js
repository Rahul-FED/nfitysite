import Styled from 'styled-components'



export const MainWrapper=Styled.div`
height:112vh;
width:100vw;
background-image: url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
background-repeat: no-repeat;
background-size: cover;

.WrapperDiv{
display:flex;
justify-content:space-between;
padding:20px;
align-items:center;
}
`
export const CoverWrapper=Styled.div`
display:flex;
flex-wrap:wrap;

`
export const Wrapper=Styled.div`
display:flex;
flex-wrap:wrap;
`
export const Card=Styled.div`
border-radius:10px;
padding:5px 0px 5px 20px;
background-color:rgba(57, 5, 84, 1);
color:white;
font-size:12px;
margin: 40px;
display:flex;
`
export const SubCard=Styled.div`
margin-bottom:30px;
margin:0 auto;
width:70%;
`
export const InsideDiv=Styled.div`
display:flex;
alignItems:center;
gap:20px;
.logo_div{
    border-radius:50%;
    padding:10px 0px 10px 4px;
    width:50px;
    background-color:rgba(150, 2, 82, 1);
    margin-left: 40px;
}
.logo{
margin-left:13px;
}
`
export const logoDiv=Styled.div`

position:absolute;
width:30px;

`