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
    margin: '20px 0',
    fontSize: 16,
    fontWeight: 400
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
      maxHeight: '100%'
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
    { 
      id: 1, 
      image: episode2, 
      title: "Episode 1: How Google Is Thinking About AI", 
      date: "Thursday, Mar 4",
      description1: "Artificial Intelligence will be the defining technology of the 21st century. What can it do for our businesses and communities? And how will it help us emerge stronger from this pandemic?",
      description2: "The podcast is presented by Matt Brittin, President of Google’s Business Operations in EMEA, and Dara Ó Briain, a well-known broadcaster, comedian and science presenter in the UK and Ireland.",
      description3: "They are joined by Demis Hassabis, founder and CEO of Google’s sister company DeepMind, and a world leader in the field of AI.",
    },
    { 
      id: 2, 
      image: episode3, 
      title: "Episode 2: A Quantum Leap Forward", 
      date: "Thursday, March 4",
      description1: "Are you ready for the quantum computing revolution and has this game-changing technology brought us to the cusp of a new Industrial Revolution?",
      description2: "This episode is presented by Yonca Dervişoğlu, Google’s Chief Marketing Officer for EMEA.",
      description3: "Yonca’s special guest is Hartmut Neven, the distinguished scientist and founder of Google’s Quantum Artificial Intelligence Lab.",
    },
    { 
      id: 3, 
      image: episode4, 
      title: "Episode 3: Building Back Better: A Sustainable Economic Recovery", 
      date: "Coming soon",
      description1: "In the post-COVID global economy, how can business, government and NGOs work together on a long-term plan and drive forward a digitally-accelerated and sustainable recovery?",
      description2: "In this episode, Ruth Porat, Chief Financial Officer of Alphabet & Google, meets two extraordinary leaders: Kristalina Georgieva, Managing Director of the International Recovery Fund, and David Miliband, former UK Foreign Secretary and the current CEO of the International Rescue Committee.",
      description3: "",
    },
    { 
      id: 4, 
      image: episode1, 
      title: "Episode 4: Building Back Better: An Inclusive Economic Recovery", 
      date: "Coming soon",
      description1: "The pandemic has shone a light on the inequities and the divisions within our society - how can we make sure that the economic recovery is both sustainable and inclusive?",
      description2: "Matt Brittin, President of Google’s Business Operations in EMEA, returns to the theme of economic recovery with Dame Vivian Hunt, Senior Partner, McKinsey & Company. Dame Vivian advises leading companies on a broad range of strategic topics, with a particular focus on performance transformation, productivity growth and organisational agility, as well as diversity and inclusion.",
      description3: "Google recently collaborated with the McKinsey Global Institute on new research looking at the impact of automation on jobs in Europe.",
    }
  ];

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
            <Typography className={classes.date} variant="h5">{guests[index - 1].date}</Typography>
            <br />
            <Typography className={classes.title} variant="h4">{guests[index - 1].title}</Typography>
            <br />
            <MediaPlayer />
            <Typography className={classes.description}>{guests[index - 1].description1}</Typography>
          </Box>
        </Box>
      </Container>
      <GuestList
        description={guests[index - 1].title}
        otherGuests={otherGuests}
      />
    </>
  );
}
