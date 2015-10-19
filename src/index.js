import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

import Main from './components/Main';

Router.run(routes, (Root, state) => {
    React.render(<Root {...state} />, document.getElementById('root'));
});