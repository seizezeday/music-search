import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Artist.css'

const stil = {
    color: 'white',
    backgroundColor: 'black',
    width: '200px',
    height: '220px',
    borderWidth: '5px',
    margin: '10px',

};

const stylePic = {
  maxWidth: '100%',
  display: 'block'
}

const styleName = {
    position: 'relative',
    // left: '50%',
    // top: '50%',
    // transform: 'translate(-50%, -50%)'

}

const Artist = (props) => {
    const preparedPics = (picsArray) => {
        return picsArray[0]
            ? (<img src={picsArray[0].url} style={stylePic}/>)
            : ("NOT THERE");

    }
    return (
        <div style={stil}>
            {preparedPics(props.pics)}
            <div style={styleName}>{props.name}</div>

        </div>
    )
};

// Artist.propTypes = {
// name  : PropTypes.number
// };

export default Artist;
