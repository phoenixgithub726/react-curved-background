import styled from 'styled-components';
import Box from "@material-ui/core/Box"

export const MenuWrapper = styled(Box)`{  
  box-shadow: 0 auto;
  position: relative;
  overflow: hidden;
}`

export const MainWrapper = styled(Box)`{
  box-shadow: 0 auto;
  background: rgb(229, 229, 229);
}`
export const FooterWrapper = styled.div`{
  background:white;
  padding: 0 30px;
  display: flex;
  justify-content: space-around;
  svg.MuiSvgIcon-root{
    width: 40px;
    height: 40px;
  }
  .MuiIconButton-root {
    padding-bottom: 0px;
  }
}`



export const ProfileIconWrapper = styled.div`
  position: relative;
  top: -50px;
`

export const ProfileIcon = styled.div`
  display: flex;
  justify-content: space-between;
  svg.MuiSvgIcon-root{
    width: 40px;
    height: 40px;
  }
`

export const CProfileIcon = styled.div`
  position: relative;
  top: -10px;
  display: flex;
  justify-content: center;
  svg.MuiSvgIcon-root{
    width: 70px;
    height: 70px;
  }
`
export const RoundedWrapper = styled(Box)`
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 300px;
  background:rgb(240, 174, 67);
  border-radius: 50%
`
export const CurvedWrapper = styled(Box)`
  background: rgb(235, 236, 239);
  border-radius: 50%;
  padding: 10px;
`
export const IconWrapper = styled.div`{
  display: block;
  color: gray;
  
}`
export const ActiveIconWrapper = styled.div`{
  display: block;
  color: rgb(240, 174, 67);
  button svg.MuiSvgIcon-root {
     color: rgb(240, 174, 67);
  };
}`

export const StepWrapper = styled(Box)`{
  margin: 30px;
  padding:15px;
  box-shadow: 0 auto;
  background: white;
  div{
    p{
      margin:0;
      font-size:20px;
      color:gray;
    };
  }
}`

export const ProfileWrapper = styled.div`
  
  position:relative;
  justify-content: space-around;
  vertical-align: middle;
  align-items: center;
  padding-bottom:50px;
  h2 {
    font-size:40px;    
    color:white;
    font-weight:200;
    margin: 0px;
  };
  h3 {
    font-size:20px;
    line-height: 20px;
    margin: 0px;
    font-weight:200;  
    color:white
  }
`
export const HeaderWrapper = styled.div`
  display:flex;
  padding-bottom:10px;
  background:rgb(240, 174, 67);
  position:relative;
  justify-content: space-around;
  vertical-align: middle;
  align-items: center;

  button svg.MuiSvgIcon-root {
    width: 35px;
    height: 35px;
  };
  
  h2 {
    font-size:40px;    
    color:white;
    margin: 0px;
  };
  h3 {
    font-size:15px;
    border: solid 1px white;
    border-radius: 3px;
    color:white;
    padding:0 10px;
    margin: 0px;
  }
`

export const FormWarpper = styled.div`
  text-align:left;
  padding: 10px;
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
    background: #11aba3;
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
  background: rgb(229, 229, 229);
  p {
      font-style: italic;
      font-size: 40px;
    };
  h1 {
    font-size:50px;
  }
}`
