import React from 'react';
import './App.css';
import Home from './Screens/Home';
import { Route, } from 'react-router-dom';

const App: React.FC = (props) => {
  return (
    <div style={Styles.container}>
      <Route path='/' component={Home} {...props} />
    </div>
  );
}

const Styles = {
  container: {
  }
}

export default App;
