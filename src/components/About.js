import React from 'react';
import Divider from './Divider';

const asteroidsJPG = require('../media/asteroids.jpg');

const About = () => {
  return (
    <div id='about' className='container'>
      <h2 className='text-right'>What is a NEO?</h2>
      <Divider />
      <img alt='asteroids' className="img-fluid" src={asteroidsJPG} />
      <Divider />
      <p className='text-left'>
        <a href='https://cneos.jpl.nasa.gov/about/basics.html'>
          From the Center for Near Earth Object Studies:
        </a>
      </p>
      <p className='text-left'>
        Near-Earth Objects (NEOs) are comets and asteroids that have been nudged
        by the gravitational attraction of nearby planets into orbits that allow
        them to enter the Earth’s neighborhood. Composed mostly of water ice
        with embedded dust particles, comets originally formed in the cold outer
        planetary system while most of the rocky asteroids formed in the warmer
        inner solar system between the orbits of Mars and Jupiter. The
        scientific interest in comets and asteroids is due largely to their
        status as the relatively unchanged remnant debris from the solar system
        formation process some 4.6 billion years ago. The giant outer planets
        (Jupiter, Saturn, Uranus, and Neptune) formed from an agglomeration of
        billions of comets and the left over bits and pieces from this formation
        process are the comets we see today. Likewise, today’s asteroids are the
        bits and pieces left over from the initial agglomeration of the inner
        planets that include Mercury, Venus, Earth, and Mars.
      </p>
      <p className='text-left'>
        As the primitive, leftover building blocks of the solar system formation
        process, comets and asteroids offer clues to the chemical mixture from
        which the planets formed some 4.6 billion years ago. If we wish to know
        the composition of the primordial mixture from which the planets formed,
        then we must determine the chemical constituents of the leftover debris
        from this formation process - the comets and asteroids.
      </p>
    </div>
  );
};

export default About;
