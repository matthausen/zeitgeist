import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';


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
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
      </Box>
    </div>
  );
}

export default Footer;