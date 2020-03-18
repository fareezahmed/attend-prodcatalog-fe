import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './card.scss';

export default React.memo(({
  id,
  title,
  desc,
  price,
  date
}) => { 
  return (
    <Card className="card">
        <div className="card_link" >
          <Link to={`/details?id=${id}&mode=edit`}>
            Edit
          </Link>
        </div>
        <Link to={`/details?id=${id}`}>
          <CardActionArea>
            <CardMedia
              className="card_media"
              image="../../assets/nodejs.svg"
              title="Node Js Logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                { title }
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                { desc }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <div className="card_footer">
          <Typography gutterBottom variant="h5" component="h3">
            {`$${price}`}
          </Typography>
          <Typography gutterBottom component="p">
            {date}
          </Typography>
        </div>
    </Card>
  );
})
