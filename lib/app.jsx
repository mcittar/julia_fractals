import React from 'react';
import Numbers from './components/numbers_container.jsx';
import Canvas from './components/canvas_container.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <Numbers />
        <Canvas />
      </div>
    );
  }

}

export default App;
