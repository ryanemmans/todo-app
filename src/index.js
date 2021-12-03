import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './app';
import SettingsProvider from './context/settings';
import PeopleProvider from './context/people';

class Main extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <PeopleProvider>
          <App />
        </PeopleProvider>
      </SettingsProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
