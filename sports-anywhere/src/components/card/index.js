import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.scss';

export default function MediaCard() {
  return (
    <Card className="card">
        <Link to="/details">
          <CardActionArea>
            <CardMedia
              className="card_media"
              image="../../assets/nodejs.svg"
              title="Node Js Logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Typography gutterBottom variant="h5" component="h3">
            $1.00
          </Typography>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
