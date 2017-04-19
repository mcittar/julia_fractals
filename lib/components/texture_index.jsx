import React from 'react';
import TextureButton from './texture_button_container.jsx';

class TextureIndex extends React.Component {
  constructor(props){
    super(props);
    this.textures = [["Default", "./textures/pal.png", [0,0,0]],
                      ["Blue", "./textures/bluepal.png", [0,.3,1]],
                      ["Gold", "./textures/golden.png", [0.721569,0.52549,0.0431373]],
                      ["Green", "./textures/greens.png", [0.333333,0.419608,0.184314]],
                      ["Purple", "./textures/purples.png", [0.580392,0,0.827451]],
                      ["Chaos", "./textures/aneurism.png", [0.294118,0,0.509804]]];
  }

  render(){
    let buttons = this.textures.map(el => {
      return <TextureButton key={ el[0] } name={ el[0] } location={ el[1] }  background={ el[2] }/>;
    });

    return(
      <section className='buttons-section'>
        { buttons }
      </section>
    );
  }
}

export default TextureIndex;
