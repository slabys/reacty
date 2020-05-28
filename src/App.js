import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/default.css';

//components
import Header from './components/header/Header';
import EventSection from './components/eventSection/EventSection';

class App extends React.Component {
    render() {
        return (
        <div className="App">
          <Header />
          <EventSection />
        </div>
      );
    }
}

export default App;
