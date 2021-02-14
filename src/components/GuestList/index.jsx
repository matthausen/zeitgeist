import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, List, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 48
  },
  description: {
    textAlign: 'justify',
    marginTop: 20,
    '@media (max-width: 960px)': {
      marginBottom: 20
    }
  },
  flex: {
    display: 'flex',
    padding: 60,
    '@media (max-width: 960px)': {
      display: 'block',
      padding: 0
    }
  },
  imageFit: {
    maxWidth: 140,
    maxHeight: 140,
    '@media (max-width: 960px)': {
      maxWidth: 310,
      maxHeight: 310,
      float: 'left',
      marginRight: 'calc(100% - 310px)'
    }
  },
  text: {
    textAlign: 'left',
    padding: '0 40px',
    '@media (max-width: 960px)': {
      padding: 0
    }
  },
  title: {
    fontWeight: 800
  }
}));

export default function GuestList({ description, otherGuests }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {otherGuests.map(o => (
        <Container>
          <List component="nav" aria-label="other guests">
            <Box className={classes.flex}>
                <Link href={`/episode/${o.id}`}>
                  <img className={classes.imageFit} src={o.image} alt="podcast-guest"></img>
                </Link>
              <Box className={classes.text}>
                <Typography className={classes.title} variant="h6">Latest. Mon 26</Typography>
                <br />
                <Typography className={classes.title} variant="h5">{o.title}</Typography>
                <br />
                <iframe height="52px" width="100%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/fac5a25e-8230-4e45-a3b0-6d2affbba70b?dark=false"></iframe>
                <Typography className={classes.description}>{description}</Typography>
              </Box>
            </Box>
          </List>
        </Container>
      ))}
    </div>
  );
}
