import React, { useState, createRef, Fragment, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { MainBox, BoxWrapper, HearderWrapper, FormWarpper } from './style'
import DeckIcon from '@material-ui/icons/Deck';
const Login = function ({ history }) {
  const login = () => {
    history.push(`/home`);
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <BoxWrapper>
        <Grid container >
          <Grid item xs={12}>
            <MainBox>
              <HearderWrapper>
                <DeckIcon />
                <h2>LHP</h2>
                <p>MORTAGE</p>
              </HearderWrapper>
              <h1> Hello !</h1>
              <h3> Let's login and review your loan info...</h3>
            </MainBox>
            <FormWarpper>
              <form>
                <label for="fname">Email:</label><br />
                <input type="text" id="fname" name="fname" placeholder="   Enter Your Email" />
                <br />
                <label for="lname">Password:</label><br />
                <input type="text" id="lname" name="lname" placeholder="   Enter Your Password" /><br /><br />
                <button onClick={login} >Login</button>
              </form>
            </FormWarpper>
          </Grid>
        </Grid>
      </BoxWrapper>
    </div>
  )
}
export default Login;