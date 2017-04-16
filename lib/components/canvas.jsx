import React from 'react';

class Canvas extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <canvas id="rendering-surface" width="650" height="650"></canvas>
    );
  }

}

export default Canvas;
