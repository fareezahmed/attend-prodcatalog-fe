import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({variation = "document", children}) => <button className={`btn btn--${variation}`}>{children}</button>;

Button.propTypes = {
    variation: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default React.memo(Button);
