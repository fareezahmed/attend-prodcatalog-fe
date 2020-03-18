import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import './nav.scss';

export default ({logo, title}) => (
    <header className="nav">
        <IconButton aria-label="menu">
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h6">
            {title}
            </Typography>
        </IconButton>
    </header>
);
