import React from 'react';
import Numbers from './components/numbers_container.jsx';
import Canvas from './components/canvas_container.jsx';
import TextureIndex from './components/texture_index.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <section className='left-section'>
          <span className='font title'>Julia Fractal Generator</span>
          <Canvas />
          <Numbers />
        </section>
        <section className='right-section'>
          <TextureIndex />
        </section>
      </div>
    );
  }

}

export default App;
