import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import brandingShapes from '../assets/branding-shapes.png'
import logo from '../assets/logo.png'

const useStyles = makeStyles({
  appBar: {
    overflowX: 'hidden'
  },
  header: {
    maxHeight: 200,
    '@media (max-width: 960px)': {
      width: '100%'
    }
  },
  logo: {
    maxWidth: '20em',
    height: 'auto'
  },
  container: {
    padding: '50px 0'
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.appBar}>
        <img className={classes.header} src={brandingShapes} alt="branding-shapes" />
      </div>
      <Container className={classes.container}>
        <Box m={4} mx="auto" classeName={classes.logoBox}>
          <img className={classes.logo} src={logo} alt="zeitgeist-logo" />
        </Box>
      </Container>
    </>
  );
}