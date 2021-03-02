import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';
import brandingShapes from '../assets/branding-shapes.png'
import logo from '../assets/logo.png'

const useStyles = makeStyles({
  appBar: {
    overflowX: 'hidden'
  },
  header: {
    maxHeight: 230,
    maxWidth: 939,
    '@media (max-width: 960px)': {
      width: '100%',
      maxHeight: 110
    }
  },
  logo: {
    maxWidth: '20em',
    height: 'auto'
  },
  container: {
    maxWidth: 1074,
    maxHeight: 255,
    marginBottom: 50,
    '@media (max-width: 960px)': {
      marginBottom: 150
    }
  },
  text: {
    color: '#333',
    fontSize: 16,
    fontWeight: 400
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.appBar}>
        <img className={classes.header} src={brandingShapes} alt="branding-shapes" />
      </div>
      <Container className={classes.container}>
        <Box m={4} mx="auto" className={classes.logoBox}>
          <img className={classes.logo} src={logo} alt="zeitgeist-logo" />
        </Box>
        <Box m={4} mx="auto">
          <Typography className={classes.text}>Welcome to The Zeitgeist Podcast, the series that takes you inside Google’s most exciting conversations.</Typography>
          <br />
          <Typography className={classes.text}>Each episode gives you access to unique insights into the technology and trends that will shape the future of your business.</Typography>
        </Box>
      </Container>
    </>
  );
}