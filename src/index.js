import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

import Main from './components/Main';

Router.run(routes, (Root) => {
    React.render(<Root />, document.getElementById('root'));
});