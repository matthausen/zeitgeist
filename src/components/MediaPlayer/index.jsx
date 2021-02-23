import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import trololo from './trololo.mp3';

const useStyles = makeStyles(theme => ({
  mediaplayer: {
    backgroundColor: 'rgb(240, 231, 206)',
    width: '100%',
    height: 52,
    fontFamily: 'GoogleSans'
  }
}));


const MediaPlayer = () => {
  const classes = useStyles();

  return (
    <div>
      <audio className={classes.mediaplayer} controls src={trololo}></audio>
    </div>
  )
}

export default MediaPlayer;