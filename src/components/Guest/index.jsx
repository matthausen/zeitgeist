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
  name: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: 'inherit'
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
      date: "Thursday, March 4",
      description1: <p>Artificial Intelligence will be the defining technology of the 21st century. What can it do for our businesses and communities? And how will it help us emerge stronger from this pandemic?</p>,
      description2: <p>The podcast is presented by <mark className={classes.name}>Matt Brittin</mark>, President of Google’s Business Operations in EMEA, and <mark className={classes.name}>Dara Ó Briain</mark>, a well-known broadcaster, comedian and science presenter in the UK and Ireland. They are joined by <mark className={classes.name}>Demis Hassabis</mark>, founder and CEO of Google’s sister company DeepMind, and a world leader in the field of AI.</p>,
      audio: "https://storage.googleapis.com/zg21previewfiles/Google_Zeitgeist_Podcast_1_M_16bit_44K.mp3",

    },
    { 
      id: 2, 
      image: episode3, 
      title: "Episode 2: A Quantum Leap Forward", 
      date: "Thursday, March 4",
      description1: <p>In 2019, Google's quantum computer became the first to perform a task that would be practically impossible for a classical machine, taking seconds to complete a calculation that would take the best supercomputer 10,000 years. Are you ready for the impact of this game-changing technology and has it brought us to the cusp of a new Industrial Revolution?</p>,
      description2: <p>This episode is presented by <mark className={classes.name}>Yonca Dervişoğlu</mark>, Google’s Chief Marketing Officer for EMEA. Yonca’s special guest is <mark className={classes.name}>Hartmut Neven</mark>, the distinguished scientist and founder of Google’s Quantum Artificial Intelligence Lab. <mark className={classes.name}>Dara Ó Briain</mark> also returns to the co-host’s chair. The Irish author, comedian, broadcaster and occasional physicist explores the science behind the technology that’s predicted to be a multibillion-dollar industry by 2030.</p>,
      audio: "https://storage.googleapis.com/zg21previewfiles/Google_Zeitgeist_Podcast_2_M_16bit_44K.mp3",
    },
    { 
      id: 3, 
      image: episode4, 
      title: "Episode 3: Building Back Better: A Sustainable Economic Recovery", 
      date: "Coming soon",
      description1: <p>In the post-COVID global economy, how can business, government and NGOs work together on a long-term plan and drive forward a digitally-accelerated and sustainable recovery?</p>,
      description2: <p>In this episode, <mark className={classes.name}>Ruth Porat</mark>, Chief Financial Officer of Alphabet & Google, meets two extraordinary leaders: <mark className={classes.name}>Kristalina Georgieva</mark>, Managing Director of the International Recovery Fund, and <mark className={classes.name}>David Miliband</mark>, former UK Foreign Secretary and the current CEO of the International Rescue Committee.</p>,
      audio: "",
    },
    { 
      id: 4, 
      image: episode1, 
      title: "Episode 4: Building Back Better: An Inclusive Economic Recovery", 
      date: "Coming soon",
      description1: <p>The pandemic has shone a light on the inequities and the divisions within our society - how can we make sure that the economic recovery is both sustainable and inclusive?</p>,
      description2: <p><mark className={classes.name}>Matt Brittin</mark>, President of Google’s Business Operations in EMEA, returns to the theme of economic recovery with <mark className={classes.name}>Dame Vivian Hunt</mark>, Senior Partner, McKinsey & Company. Dame Vivian advises leading companies on a broad range of strategic topics, with a particular focus on performance transformation, productivity growth and organisational agility, as well as diversity and inclusion. Google recently collaborated with the McKinsey Global Institute on new research looking at the impact of automation on jobs in Europe.</p>,
      audio: "",
    }
  ];

  let otherGuests = [...guests];
  const guestIndex = guests.indexOf(guests[index - 1]);
  if (guestIndex > -1) {
    otherGuests.splice(guestIndex, 1);
  }

  const audioFile = guests[index - 1].audio;
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
            {audioFile.length > 0 && <MediaPlayer src={audioFile}/>}
            <Typography className={classes.description}>{guests[index - 1].description1}</Typography>
            <br />
            <Typography className={classes.description}>{guests[index - 1].description2}</Typography>
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
