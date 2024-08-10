import React, { useState } from 'react';

const App = () => {
  const sources = ["Freedium", "Read Medium"];
  const [inputValue, setInputValue] = useState('');
  const [source, setSource] = useState(sources[0]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    if (source === "Freedium") {
      window.location.href = "https://www.freedium.cfd/" + inputValue
    }
    else if (source === "Read Medium") {
      window.location.href = "https://readmedium.com/" + inputValue
    }
  }

  return (
    <div className="flex items-center justify-center flex-col h-screen space-y-10 bg-gray-50">
      <label className='text-center text-lg font-bold'>
        Read Medium Free
      </label>
      <div className='flex items-center justify-center space-x-4'>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={handleInputChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
        onChange={(e) => setSource(e.target.value)}
        defaultValue={source}>
          {
            sources.map((source, idx) => (
              <option key={idx} value={source}>{source}</option>
            ))
          }
        </select>


        <button
          onClick={handleClick}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
}



export default App;
