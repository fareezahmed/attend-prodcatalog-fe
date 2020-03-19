import React from 'react';
import Typography from '@material-ui/core/Typography';

import './not-found.scss';

export default () => {
    return (
        <div className="not-found">
          <Typography gutterBottom variant="h1" component="h1">
            Sorry, can’t find that.
          </Typography>
        </div>
    );
  }