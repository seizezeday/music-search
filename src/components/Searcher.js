import React from 'react';

class Searcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            data: {},
            inputCleared: false

        };
    }

      render() {
        return (
            <div>
              <span><input type="text" name="search" placeholder="Type an artist.."/>
              <button>Search</button>
            </span>
            </div>
        );
    }

}

export default Searcher;
