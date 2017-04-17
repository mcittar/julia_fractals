import React from 'react';
import TextureButton from './texture_button_container.jsx';

class TextureIndex extends React.Component {
  constructor(props){
    super(props);
    this.textures = [["Default", "./textures/pal.png", [0,0,0]],
                      ["Blue", "./textures/bluepal.png", [0,1,0]],
                      ["Gold", "./textures/golden.png", [0,1,1]],
                      ["Green", "./textures/greens.png", [0,1,0]],
                      ["Purple", "./textures/purples.png", [1,0,1]],
                      ["Chaos", "./textures/aneurism.png", [1,0,0]],
                      ["Sunset", "./textures/sunset.png", [0,1,0]]];
  }

  render(){
    let buttons = this.textures.map(el => {
      return <TextureButton key={ el[0] } name={ el[0] } location={ el[1] }  background={ el[2] }/>;
    });

    return(
      <div>
        { buttons }
      </div>
    );
  }
}

export default TextureIndex;
