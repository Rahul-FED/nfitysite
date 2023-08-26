import styled from "styled-components";
import { color } from "../../Color/Color";

export const MainDiv = styled.div`
 background-color:rgba(41, 41, 41, 1);
width:288px;
height:112vh;
border-radius:0px, 32px, 32px, 0px;
.Para{
    font-size:20px;
    color:${color._white};;
   
}
`;
    
export const SubDiv = styled.div`
  .Para{
    margin-left:20px;

    }
display:flex;
gap:10px;
padding-top:20px;
&:hover{
        background-color:rgba(243, 0, 80, 1);
        transition: 0.25s;
        padding:5px;
    }
  

`;
export const SubDivMain = styled.div`
display:flex;
gap:10px;
padding-top:20px;
`;
export const SubDiv2 = styled.div`
margin:0 auto;
width:70%;
`;
    
export const IconDiv = styled.div`
display:flex;
gap:14px;
position:absolute;
bottom:0px;
`;
    