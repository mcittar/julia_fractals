import React from 'react';

class Numbers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: this.props.options
    };
  }

  render(){
    let roundedReal = Math.round((this.props.options[0] * 1000)) / 1000;
    let roundedImaginary = Math.round((this.props.options[1] * 1000)) / 1000;

    return (
      <div>
        { roundedReal }
        { roundedImaginary }
      </div>
    );
  }
}

export default Numbers;
