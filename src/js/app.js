// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import Framework7React from 'framework7-react';

import Framework7 from './framework7-custom';

// Import Framework7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import App Component
import App from '../components/App';

// Init F7 React Plugin
Framework7.use(Framework7React);

// Mount React App
ReactDOM.render(React.createElement(App), document.getElementById('app'));
