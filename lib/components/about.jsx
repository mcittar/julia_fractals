import React from 'react';

class About extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <span className='font'>
        <a className='font' href="https://en.wikipedia.org/wiki/Julia_set">About</a>
          |
        <a className='font' href="https://github.com/mcittar/julia_fractals">Github</a>
      </span>
    );
  }
}


export default About;
