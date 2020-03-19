import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({variation = "document", children}) => <button className={`btn btn--${variation}`}>{children}</button>;

Button.propTypes = {
    variation: PropTypes.string,
    children: PropTypes.node.isRequired,
}


Button.defaultProps = {
    variation: "document",
}

export default React.memo(Button);