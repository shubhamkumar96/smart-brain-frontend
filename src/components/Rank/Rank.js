import React from 'react';

const Rank = ({name, entries}) => {
    return ( 
        <div className='ma4 mt0'>
            <div className='white f3'> 
                {`${name}, Your Current Entry Count is ...`}
            </div>
            <div className='white f3'> 
                {entries}
            </div>
        </div>
    );
}

export default Rank;