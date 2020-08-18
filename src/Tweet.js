import React from 'react';

function Tweet(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
        </div>
    );
}

export default Tweet;