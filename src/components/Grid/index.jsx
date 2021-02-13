import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Link } from '@material-ui/core';
import episode1 from '../assets/episode-1.jpg';
import episode2 from '../assets/episode-2.jpg';
import episode3 from '../assets/episode-3.jpg';
import episode4 from '../assets/episode-4.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 140,
  },
  imageFit: {
    maxWidth: 140,
    maxHeight: 140
  }
}));

const guests = [{id: 1, image: episode1}, {id:2, image: episode2}, {id:3, image: episode3}, {id:4, image: episode4}];

export default function HomeGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {guests.map(guest => (
            <Grid key={guest.id} item>
              <Link href={`/guests/${guest.id}`}>
                <Paper className={classes.paper}>
                  <img className={classes.imageFit} src={guest.image} alt="zeitgeist-guest" />
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container justify="center" spacing={4}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}
