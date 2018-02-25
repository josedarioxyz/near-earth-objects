import React from 'react';

const Glossary = () => {
  return (
    <div id='glossary' className='container'>
      <h2 className='text-right'>Glossary of Terms</h2>
      {
        dictionary
          .sort((a, b) => a.term.localeCompare(b.term))
          .map((entry, key) =>
            <dl key={key}>
              <dt className='text-uppercase'>{entry.term}</dt>
              <dd>{entry.definition}</dd>
            </dl>
          )
      }
    </div>
  );
};

const dictionary = [
  {
    term: 'Asteroid',
    definition: 'In short, asteroids are small rocky bodies that orbit the Sun. These are differentiated from meteoroids, as well as comets.'
  },
  {
    term: 'Near Earth Object (NEO)',
    definition: 'A NEO is any sort of celestial body that has an orbit or path that brings it into close proximity to Earth. NEOs are divided into subgroups, some of which are comets, asteroids, and potentially hazardous asteroids (PHAs).'
  },
  {
    term: 'Potentially Hazardous Asteroid (PHA)',
    definition: 'Near earth objects that have a minimum orbit intersection distance with Earth of 0.05au or less as well as an absolute magnitude (H) of 22.0 or higher.'
  },
  {
    term: 'Absolute Magnitude (H)',
    definition: 'The absolute magnitude of a celestial object is the visual magnitude of the object as measured from 1 astronomical unit (AU) away.'
  },
  {
    term: 'Astronomical Unit (AU)',
    definition: 'Unit for measuring distance. It is approximately the average distance between the Earth and the Sun. It is defined as 149597870700 metres.'
  },
  {
    term: 'Comet',
    definition: 'A comet is a small body composed of rock and frozen gases. Comets orbit around the Sun. The most famous example of a comet is known as Halley\'s comet. The Solar System likely contains billions of comets orbiting around the Sun from vast, distant orbits.'
  }
];

export default Glossary;
