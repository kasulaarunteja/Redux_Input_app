

import React from 'react';
import { useState } from 'react';

const Todoinput = () => {
  
    const [title, setTitle] = useState('');


    return (
        <div>
            <h3>Add Todo</h3>
            <input value={title} 
            onChange={(e) =>setTitle(e.target.value)} 
            placeholder='add items'/>
            <button>Add</button>
        </div>
    );
}

export default Todoinput;
