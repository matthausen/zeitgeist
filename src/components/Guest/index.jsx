import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';
import GuestList from '../GuestList';
import episode1 from '../assets/episode-1.jpg';
import episode2 from '../assets/episode-2.jpg';
import episode3 from '../assets/episode-3.jpg';
import episode4 from '../assets/episode-4.jpg';
import mediaPlayer from '../assets/mediaplayer.png'

const useStyles = makeStyles({
  darkContainer: {
    backgroundColor: 'rgb(45, 45, 45)',
  },
  date: {
    color: "rgb(180, 172, 150)",
    fontWeight: 800
  },
  description: {
    color: 'rgb(255, 247, 221)',
  },
  flex: {
    display: 'flex',
    padding: 60,
    '@media (max-width: 780px)': {
      display: 'block',
      padding: 10
    }
  },
  imageFit: {
    maxWidth: 200,
    maxHeight: 200,
    '@media (max-width: 780px)': {
      maxWidth: 310,
      maxHeight: 310
    }
  },
  mediaPlayer: {
    '@media (max-width: 780px)': {
      maxWidth: 320,
    }
  },
  text: {
    textAlign: 'left',
    padding: '0 40px',
    '@media (max-width: 780px)': {
      padding: 0
    }
  },
  title: {
    color: 'rgb(255, 247, 221)',
    fontWeight: 800
  }
});

export default function Guest() {
  const classes = useStyles();

  const index = window.location.href.split("/").pop()
  const guests = [
    { id:1, image: episode1, title: "Episode 4: Responsible recovery - Part 2" },
    { id:2, image: episode2, title: "Episode 1: How Google is thinking about AI" },
    { id:3, image: episode3, title: "Episode 2: A quantum leap" },
    { id:4, image: episode4, title: "Episode 3: Responsible recovery - Part 1" }
  ];
  const description = "In this episode, we're goign to explore how Google and Alphabet are thinking about Artificial Intelligence. How can AI help to tackle major global challenges like climate change/. And what role can it play for businesses and communities, particularly during the pandemic ?"

  let otherGuests = [...guests];
  const guestIndex = guests.indexOf(guests[index - 1]);
  if (guestIndex > -1) {
    otherGuests.splice(guestIndex, 1);
  }

  return (
    <>
      <Container maxWidth="md">
        <Box mb={6}>
          <Typography>Zeitgeist is an event that people mark on their calendar in anticipation — brilliant guests, inspiring stories, intimate & inclusive.</Typography>
          <br />
          <Typography>Things are different this year, so as an alternative to a live event we’re making a portable, on-demand experience. Brilliant in all the same ways and absolutely impossible to miss.</Typography>
        </Box>
      </Container>
      <Container className={classes.darkContainer}>
        <Box className={classes.flex}>
          <img className={classes.imageFit} src={guests[index - 1].image} alt="podcast-guest"></img>
          <Box className={classes.text}>
            <Typography className={classes.date} variant="h5">Latest. Mon 26</Typography>
            <br />
            <Typography className={classes.title} variant="h4">{guests[index - 1].title}</Typography>
            <br />
            <img className={classes.mediaPlayer} src={mediaPlayer} alt="media-player"></img>
            <Typography className={classes.description}>{description}</Typography>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box mb={6}>
          <GuestList
            description={description}
            otherGuests={otherGuests}
          />
        </Box>
      </Container>
    </>
  );
}