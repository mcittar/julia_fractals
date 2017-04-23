import React from 'react';

class About extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <section className='about-section'>
        <a className='font' href="https://en.wikipedia.org/wiki/Julia_set">About</a>
        <span className='bar font'>|</span>
        <a className='font' href="https://github.com/mcittar/julia_fractals/tree/gh-pages">Github</a>
      </section>
    );
  }
}


export default About;
