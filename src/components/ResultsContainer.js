import React from 'react';
import Artist from './Artist';

const ResultsContainer = ({isSearched, searchResults}) => {

  const stil1 = {
    backgroundColor: 'blue',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    };

    if (isSearched) {
        const data = searchResults;
        console.log('DATA', data);

        const listNames = data.artists.items.map((artist) =>
        //<li key={artist.id}>
            <Artist name={artist.name} pics={artist.images} key={artist.id}/>);
      //  </li>);

        console.log('LIST Names', listNames);
        return (
            <div style={stil1}>

                    {listNames}

            </div>
        );
    } else {
        return (
            <div>
                {searchResults.initial}</div>
        );
    }
}

export default ResultsContainer;
