import React from 'react';
import Numbers from './components/numbers_container.jsx';
import Canvas from './components/canvas_container.jsx';
import TextureIndex from './components/texture_index_container.jsx';
import About from './components/about.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='app'>

          <Canvas />
          <section className='relative-wrapper'>
            <section className='right-section'>
              <Numbers />
              <TextureIndex />
              <About />
            </section>
          </section>


      </div>
    );
  }

}

export default App;
