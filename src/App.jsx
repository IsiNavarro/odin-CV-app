import React from 'react';
import { useState } from 'react';
import CVDisplay from './components/CVDisplay';
import { sampleData } from './sampleData';

function App() {
  const [userData, setUserData] = useState(sampleData);
  return (
    <div className="w-full min-h-screen p-3">
      <CVDisplay data={userData} />
    </div>
  );
}

export default App;
