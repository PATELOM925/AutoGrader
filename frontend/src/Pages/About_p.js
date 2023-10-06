import React from 'react';
import '../Components/box.css'

function About() {

    const myStyle = {
        marginTop: '1000px',
        color: 'black'
      };

  return (
    <div className="purple-box-container" style={myStyle}>
        <h1 className='abt_p_h1'>About The Project</h1>
        <p className='abt_p_p'></p>
        
        <p className='abt_p_p'></p>
    </div>

  );
}

export default About;