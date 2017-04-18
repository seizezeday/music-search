import React from 'react';

const ResultsContainer = ({isSearched, searchResults}) => {
    

    if (isSearched) {
        const data = searchResults;
        console.log('DATA', data);

        const listNames = data.artists.items.map((artist) =>
        <li key={artist.id}>
            {artist.name}
        </li>);

        console.log('LIST Names', listNames);
        return (
            <div>ResultsContainer:
                <ul>
                    {listNames}
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                {searchResults}</div>
        );
    }
}

export default ResultsContainer;
