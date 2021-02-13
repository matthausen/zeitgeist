import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, List, Link } from '@material-ui/core';
import mediaPlayer from '../assets/mediaplayer.png'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 48
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
      maxHeight: 310
    }
  },
  mediaPlayer: {
    maxHeight: 40,
    '@media (max-width: 960px)': {
      maxWidth: 320,
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
                <img className={classes.mediaPlayer} src={mediaPlayer} alt="media-player"></img>
                <Typography>{description}</Typography>
              </Box>
            </Box>
          </List>
        </Container>
      ))}
    </div>
  );
}
