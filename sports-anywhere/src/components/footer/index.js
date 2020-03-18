import React from 'react';
import './footer.scss';

export default ({children}) => (
    <footer>
        <p>
            { children }
        </p>
    </footer>
);