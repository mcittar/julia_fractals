import React from 'react';
import TextureButton from './texture_button_container.jsx';

class TextureIndex extends React.Component {
  constructor(props){
    super(props);
    this.colors = {
      Default: ["./textures/pal.png", [0,0,0]],
      Blue: ["./textures/bluepal.png", [0,.3,1]],
      Gold: ["./textures/golden.png", [0.721569,0.52549,0.0431373]],
      Green: ["./textures/greens.png", [0.333333,0.419608,0.184314]],
      Purple: ["./textures/purples.png", [0.580392,0,0.827451]],
      Chaos: ["./textures/aneurism.png", [0.294118,0,0.509804]]
    };
    this.state = {
      value: "Default"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, this.getTexture);
  }

  getTexture() {
    let location;
    let background;
    switch (this.state.value) {
      case "Default":
        location = this.colors.Default[0];
        background = this.colors.Default[1];
        break;
      case "Blue":
        location = this.colors.Blue[0];
        background = this.colors.Blue[1];
        break;
      case "Gold":
        location = this.colors.Gold[0];
        background = this.colors.Gold[1];
        break;
      case "Purple":
        location = this.colors.Purple[0];
        background = this.colors.Purple[1];
        break;
      case "Green":
        location = this.colors.Green[0];
        background = this.colors.Green[1];
        break;
      case "Chaos":
        location = this.colors.Chaos[0];
        background = this.colors.Chaos[1];
        break;
      default:
        location = this.colors.Default[0];
        background = this.colors.Default[1];
    }
    this.props.sendTexture([location, background]);
  }

  render(){

    let buttons = Object.keys(this.colors).map(el => {
      return <TextureButton key={ el } name={ el }/>;
    });

    return(
      <section className='buttons-section'>
        <select onChange={ this.handleChange } value={ this.state.value }>
          { buttons }
        </select>
      </section>
    );
  }
}

export default TextureIndex;
