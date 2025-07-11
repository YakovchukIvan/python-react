import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface Detail {
  title: string;
  channel: string;
}

function App() {
  const [details, setDetails] = useState<Detail[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000')
      .then((res) => setDetails(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <header>Данні з Django</header>
      <hr />
      {details.map((output, id) => (
        <div key={id}>
          <h2>{output.title}</h2>
          <p>{output.channel}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
