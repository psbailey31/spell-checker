import { Rating } from '@mantine/core';
import AWS from 'aws-sdk';



function App() {
  return (
    <div className="App">
        <p>ID:</p> {process.env.REACT_APP_AWS_ACCESS_KEY_ID}
        
    </div>
  );
}

export default App;
