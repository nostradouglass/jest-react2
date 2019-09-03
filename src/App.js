import React from 'react';
import Header from './components/header'
import Headline from './components/headline/index'

import './app.scss'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
        <Headline header="Posts" desc="Click the button to render posts." />
        </section>
        
      </div>
    );
  }
}

export default App;
