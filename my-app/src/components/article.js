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
          Published Date: {article.published_date[0]}{article.published_date[1]}
        {article.published_date[2]}{article.published_date[3]}
        {article.published_date[4]}{article.published_date[5]}
        {article.published_date[6]}{article.published_date[7]}
        {article.published_date[8]}{article.published_date[9]}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {article.tags.length >= 1 ? 
        <p id="ptag">Tags: {article.tags[0]} {article.tags[1]} {article.tags[2]} {article.tags[3]}</p>
        : <p></p>
        }
        {article.categories.length >= 1 ? 
        <p id="ptag">Categories: {article.categories[0]} {article.categories[1]} 
        {article.categories[2]} {article.categories[3]}</p>
        : <p></p>
        }
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        </div>
      </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={article.featured_image}
        title="Space News"
        id="pic"
      />
    </Card>
    )})}
    </div>
  )
}



