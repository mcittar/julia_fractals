import React from 'react';
import Canvas from './components/canvas.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <Canvas />
      </div>
    );
  }

}

export default App;
