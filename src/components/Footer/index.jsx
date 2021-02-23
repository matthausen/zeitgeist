import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: 'rgb(240, 231, 206)',
    padding: 36,
    color: 'black'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Box>
        <a href="https://google.com" target="_blank">Privacy Policy</a>
      </Box>
    </div>
  );
}

export default Footer;