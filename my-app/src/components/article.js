import React, { useState } from "react";
import "./styles.css";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Article({articles}) {

  const classes = useStyles();
  const theme = useTheme();

  return (

<div>
    {articles && articles.map((article) => { return (
      <Card className={classes.root} id="one">
      <div className={classes.details}>
      <div>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          <a href={article.url} target="blank" id="noa">{article.title}</a>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          <br></br>
          Published Date: {article.publishedAt[0]}{article.publishedAt[1]}
        {article.publishedAt[2]}{article.publishedAt[3]}
        {article.publishedAt[4]}{article.publishedAt[5]}
        {article.publishedAt[6]}{article.publishedAt[7]}
        {article.publishedAt[8]}{article.publishedAt[9]}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          <p>{article.summary}</p>
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        </div>
      </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={article.imageUrl}
        title="Space News"
        id="pic"
      />
    </Card>
    )})}
    </div>
  )
}



