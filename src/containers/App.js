import React, {Component} from 'react';
import 'tachyons';
import Navigation from '../components/Navigation/Navigation'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Logo />
        <Rank />
        <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    );
  }  
}

export default App;