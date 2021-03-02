import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, List, Link } from '@material-ui/core';
import MediaPlayer from '../MediaPlayer';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1122,
    margin: '42px auto'
  },
  date: {
    color: "rgb(180, 172, 150)",
    fontWeight: 800,
  },
  description: {
    textAlign: 'justify',
    '@media (max-width: 960px)': {
      marginBottom: 20
    }
  },
  flex: {
    display: 'flex',
    padding: '40px 0',
    '@media (max-width: 960px)': {
      display: 'block',
      padding: 0
    }
  },
  imageFit: {
    maxWidth: 163,
    maxHeight: 163,
    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25);',
    marginRight: 32,
    '@media (max-width: 960px)': {
      marginRight: 0,
      maxWidth: 'calc(100% - 5px)',
      maxHeight: 'calc(100% - 5px)',
      marginBottom: 20
    }
  },
  text: {
    textAlign: 'left',
    paddingLeft: 20,
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
        <Container className={classes.container}>
          <List component="nav" aria-label="other guests">
            <Box className={classes.flex}>
              <Link href={`/episode/${o.id}`}>
                <img className={classes.imageFit} src={o.image} alt="podcast-guest"></img>
              </Link>
              <Box className={classes.text}>
                <Typography className={classes.date} variant="h6">{o.date}</Typography>
                <br />
                <Typography className={classes.title} variant="h5">{o.title}</Typography>
                <br />
                {o.audio.length > 0 && <MediaPlayer src={o.audio}/>}
                <Typography className={classes.description}>{o.description1}</Typography>
                <Typography className={classes.description}>{o.description2}</Typography>
              </Box>
            </Box>
          </List>
        </Container>
      ))}
    </div>
  );
}
