import React from 'react';
import Header from './components/header'
import Headline from './components/headline/index'

import './app.scss'


const tempArr = [{
  fName: 'Joe',
  lName: "Bloggs",
  email: "joeB@gmail.com",
  age: 24,
  onlineStatus: true
}]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
        <Headline header="Posts" desc="Click the button to render posts."  tempArr = {tempArr} />
        </section>
        
      </div>
    );
  }
}

export default App;
