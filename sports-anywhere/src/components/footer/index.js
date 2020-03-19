import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

const Footer = ({children}) => (
    <footer>
        <p>
            { children }
        </p>
    </footer>
);

Footer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default React.memo(Footer);