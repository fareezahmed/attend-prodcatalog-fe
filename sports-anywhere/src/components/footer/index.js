import React from 'react';
import './footer.scss';

export default React.memo(({children}) => (
    <footer>
        <p>
            { children }
        </p>
    </footer>
));