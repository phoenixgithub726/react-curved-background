import styled from 'styled-components';
import Box from "@material-ui/core/Box"

export const MainBox = styled(Box)`{
  padding: 20px;
  box-shadow: 0 auto;
  background: rgb(229, 229, 229);
  box-shadow: 0 5px rgb(216, 218, 222);
}`
export const HearderWrapper = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  vertical-align: middle;
  h2 {
    font-size:50px;  
    line-height: 50px;  
  };
  p{
    font-size: 20px;
    border: solid 2px #a9a3a3;
    border-radius: 5px;
    padding: 0 20px;
    letter-spacing: 1px;
  };   
  svg.MuiSvgIcon-root{
    width:60px;
    height:60px;
    color: rgb( 231, 136, 59);
  }
  
`
export const FormWarpper = styled.div`
  text-align:left;
  padding: 50px;
  font-size: 20px;
  label{
    font-weight: bold;
  };
  input {
    width: 300px;
    margin-bottom: 20px;
    height: 50px;
    background: lightgray;
    box-shadow: none;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 15px;
  };
  button{
    width: 300px;
    margin-bottom: 20px;
    height: 50px;
    background: rgb(83, 164, 216);
    box-shadow: none;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    color:white;
    font-size: 15px;
  }
`

export const BoxWrapper = styled(Box)`{
  width: 400px;
  h3 {
      font-style: italic;
      font-size: 40px;
      font-weight: 150;
      padding:20px;
    };
  h1 {
    font-size:50px;
    color: orange;
    line-height: 50px
  }
}`
