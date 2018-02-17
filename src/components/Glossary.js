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
              <dt>{entry.term}</dt>
              <dd>{entry.definition}</dd>
            </dl>
          )
      }
    </div>
  );
};

const dictionary = [
  {
    term: 'COMING SOON',
    definition: '...'
  }
];

export default Glossary;
