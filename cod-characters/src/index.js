import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Welcome from './components/welcome';
import registerServiceWorker from './registerServiceWorker';
import CreateCharacter from './components/createChar';

ReactDOM.render(<CreateCharacter />, document.getElementById('root'));
registerServiceWorker();
