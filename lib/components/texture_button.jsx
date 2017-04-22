import React from 'react';

class TextureButton extends React.Component{
  constructor(props){
    super(props);
    this.changeTexture = this.changeTexture.bind(this);
  }

  changeTexture(){
    this.props.sendTexture([this.props.location, this.props.background]);
  }

  render(){

    return(
      <option value={ this.props.name }>{ this.props.name }</option>
    );
  }
}

export default TextureButton;
