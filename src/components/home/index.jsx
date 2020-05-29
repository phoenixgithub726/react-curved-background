import React, { useState, createRef, Fragment, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { RoundedWrapper, ActiveIconWrapper, CProfileIcon, CurvedWrapper, ProfileIconWrapper, ProfileIcon, IconWrapper, FooterWrapper, StepWrapper, MainWrapper, BoxWrapper, MenuWrapper, HeaderWrapper, FormWarpper, ProfileWrapper } from './style'
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import progress from '../../resource/progress.jfif'; // gives image path
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MessageIcon from '@material-ui/icons/Message';
import EventNoteIcon from '@material-ui/icons/EventNote';
import FolderIcon from '@material-ui/icons/Folder';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ListItems from '../list'
const Home = function ({ history }) {

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [user, setUser] = useState([]);
  const toggleDrawer = (open) => () => {
    setDrawer(open)
  };
  useEffect(() => {
    fetch("https://lhp-forms.lenderhomepage.com/api/code-challenge/loan-officers/1")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result)
          setUser(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  console.log(window.location.pathname);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {isLoaded ?
        <BoxWrapper>
          <Grid container >
            <Grid item xs={12}>
              <MenuWrapper>
                <RoundedWrapper/>
                <HeaderWrapper>
                  <IconButton style={{ color: 'white' }} onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                  <h2>LHP</h2>
                  <h3>MORTAGE</h3>
                  <IconButton style={{ color: '#ece8e8' }}>
                    <SettingsIcon />
                  </IconButton>
                </HeaderWrapper>
                <ProfileWrapper>
                  <h2>
                    {user.firstname}  {user.lastname}
                  </h2>
                  <h3>
                    NMLS: {user.nmls}
                  </h3>
                </ProfileWrapper>
                <img src={user.avatar_url} alt="this is avatar_url" style={{ width: '150px', height: '150px', borderRadius: '50%', position: 'relative', border: 'solid 8px rgb(239, 207, 149)' }} />
              </MenuWrapper>
              <ProfileIconWrapper>
                <ProfileIcon style={{ padding: '0 30px' }}>
                  <CurvedWrapper>
                    <MessageIcon />
                  </CurvedWrapper>
                  <CurvedWrapper>
                    <PhoneAndroidIcon />
                  </CurvedWrapper>
                </ProfileIcon>
                <ProfileIcon style={{ padding: '0 80px' }}>
                  <CurvedWrapper>
                    <DateRangeIcon />
                  </CurvedWrapper>
                  <CurvedWrapper>
                    <FolderIcon />
                  </CurvedWrapper>
                </ProfileIcon>
                <CProfileIcon>
                  <CurvedWrapper>
                    <EventNoteIcon />
                  </CurvedWrapper>
                </CProfileIcon>
              </ProfileIconWrapper>
              <MainWrapper>
                <StepWrapper>
                  <div style={{ justifyContent: 'flex-start', display: 'flex' }}>
                    <p>Next Step:</p>
                  </div>
                  <img src={progress} alt="this is car image" style={{ width: '100px', height: '100px', borderRadius: '50%', position: 'relative' }} />
                  <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <p>Upload Documents</p>
                  </div>
                </StepWrapper>
              </MainWrapper>
              <SwipeableDrawer
                anchor="left"
                open={drawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onKeyDown={toggleDrawer(false)}
                >
                  <ListItems />
                </div>
              </SwipeableDrawer>
            </Grid>
          </Grid>
          <FooterWrapper>
            <ActiveIconWrapper>
              <IconButton>
                <HomeIcon />
              </IconButton>
               Home
              </ActiveIconWrapper>
            <IconWrapper>
              <IconButton>
                <BarChartIcon />
              </IconButton>
                Calculate
              </IconWrapper>
            <IconWrapper>
              <IconButton>
                <SignalWifi4BarIcon />
              </IconButton>
              Application
              </IconWrapper>
          </FooterWrapper>
        </BoxWrapper>
        : 'Loading..........'
      }

    </div >
  )
}
export default Home;