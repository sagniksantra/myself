// import React from 'react';
// import '../../App.css';

// export default function Events() {
//   return <h1 className='events'>Developer, Learner, Dreamer </h1>;
// }

import React from 'react';
import '../../App.css';
import { Button } from './../Button';
import './../HeroSection.css';

function Events() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Developer, Learner, Dreamer </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac scelerisque sem. </p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          more 'bout me
        </Button> */}
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default Events;