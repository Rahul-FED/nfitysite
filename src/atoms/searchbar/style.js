import Styled from "styled-components";
import { color } from "../../Color/Color";

export const MainDiv=Styled.div`
border:2px solid white;
width:300px;
display:flex;
justify-content:space-between;
padding:10px;
border-radius:20px;
gap:30px;
align-items:center;
.input{
    border:transparent;
    background:transparent;
}
.search{
    color:${color._white};
}
`