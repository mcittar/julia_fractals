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
      <button onClick={ this.changeTexture }>{ this.props.name }</button>
    );
  }
}

export default TextureButton;
