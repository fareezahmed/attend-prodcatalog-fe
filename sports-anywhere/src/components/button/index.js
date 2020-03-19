import React from 'react';
import './button.scss';

export default React.memo(({options, variation = "document", children}) => <button className={`btn btn--${variation}`} {...options}>{children}</button>);

