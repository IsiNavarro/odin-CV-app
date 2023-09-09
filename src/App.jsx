import React from 'react';
import CVDisplay from './components/CVDisplay';
import { sampleData } from './sampleData';

/**/

function App() {
  return (
    <div className="w-full min-h-screen p-3">
      <CVDisplay data={sampleData} />
    </div>
  );
}

export default App;
