import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./styles.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function Header() {

  const classes = useStyles();

    return(
      
      <div id="header">
      <Card className={classes.root} id="transparent">
      <CardContent id="transparent">
        <Typography className={classes.title} id="title">
          SPACE NEWS
        </Typography>
        <Typography id="paragraph">
          Find here your reliable sources
        </Typography>
        </CardContent>
        </Card>
        </div>
        
    )
}

