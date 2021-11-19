import React, { useState } from 'react';
import useLocalStorage from './custom/useLocalStorage'

function App() {
  const [key, setKey] = useState();
  const [value, setValue] = useLocalStorage(key);
  return (
    <div>
      key : <input
              value={key}
              onChange={(e) => { setKey(e.target.value) }}
              type="text"
            />
      Value : <input
              value={value}
              onChange={(e) => { setValue(e.target.value) }}
              type="text"
            />
    </div>
  );
}

export default App;
