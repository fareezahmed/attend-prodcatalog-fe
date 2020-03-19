import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

import './nav.scss';

const Nav = ({logo, title}) => (
    <header className="nav">
        <Link to="/">
            <IconButton aria-label="menu">
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="h6">
                {title}
                </Typography>
            </IconButton>
        </Link>
    </header>
);

Nav.propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string.isRequired,
}


Nav.defaultProps = {
    logo: '',
}

  export default React.memo(Nav);