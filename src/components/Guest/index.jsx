import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';
import GuestList from '../GuestList';
import MediaPlayer from '../MediaPlayer';
import episode1 from '../assets/episode-1.jpg';
import episode2 from '../assets/episode-2.jpg';
import episode3 from '../assets/episode-3.jpg';
import episode4 from '../assets/episode-4.jpg';

const useStyles = makeStyles({
  darkContainer: {
    backgroundColor: 'rgb(45, 45, 45)',
    minWidth: '100%',
    minHeight: 510
  },
  date: {
    color: "rgb(180, 172, 150)",
    fontWeight: 800
  },
  description: {
    color: 'rgb(255, 247, 221)',
    textAlign: 'justify',
    margin: '20px 0'
  },
  flex: {
    display: 'flex',
    maxWidth: 1074,
    margin: '0 auto',
    padding: '60px 0',
    '@media (max-width: 960px)': {
      display: 'block',
      padding: 10
    }
  },
  imageFit: {
    maxWidth: 390,
    maxHeight: 390,
    '@media (max-width: 960px)': {
      margin: '40px 0',
      maxWidth: '100%',
    }
  },
  text: {
    textAlign: 'left',
    marginLeft: 50,
    '@media (max-width: 960px)': {
      padding: 0,
      marginLeft: 0
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
    { id: 1, image: episode1, title: "Episode 4: Responsible recovery - Part 2" },
    { id: 2, image: episode2, title: "Episode 1: How Google is thinking about AI" },
    { id: 3, image: episode3, title: "Episode 2: A quantum leap" },
    { id: 4, image: episode4, title: "Episode 3: Responsible recovery - Part 1" }
  ];
  const description = "In this episode, we're going to explore how Google and Alphabet are thinking about Artificial Intelligence. How can AI help to tackle major global challenges like climate change. And what role can it play for businesses and communities, particularly during the pandemic ?"

  let otherGuests = [...guests];
  const guestIndex = guests.indexOf(guests[index - 1]);
  if (guestIndex > -1) {
    otherGuests.splice(guestIndex, 1);
  }

  return (
    <>
      <Container className={classes.darkContainer}>
        <Box className={classes.flex}>
          <div>
            <img className={classes.imageFit} src={guests[index - 1].image} alt="podcast-guest"></img>
          </div>
          <Box className={classes.text}>
            <Typography className={classes.date} variant="h5">Latest. Mon 26</Typography>
            <br />
            <Typography className={classes.title} variant="h4">{guests[index - 1].title}</Typography>
            <br />
            <MediaPlayer />
            <Typography className={classes.description}>{description}</Typography>
          </Box>
        </Box>
      </Container>
      <GuestList
        description={description}
        otherGuests={otherGuests}
      />
    </>
  );
}