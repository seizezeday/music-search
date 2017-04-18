import React from 'react';

class Searcher extends React.Component {

      render() {
        return (
            <div>
              <span><input onChange={this.props.queryChanged} value={this.props.query} type="text" name="search" placeholder="Type an artist.."/>
              <button onClick={this.props.searchClicked}>Search</button>
            </span>
            </div>
        );
    }

}

export default Searcher;
