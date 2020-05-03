import React from 'react';

const Scroll = (props) => {
    // console.log(props)
    return (
        <div style={{overflowY: 'auto', border:'1px solid rgba(0,0,0, 0)', height:'600px', paddingTop:'1em' }}>
            {props.children}
        </div>
    );
}

export default Scroll;