import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
      if(isRunning) {
        const id = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
        setIntervalId(id);

        return () => clearInterval(id)
      } else {
        if(intervalId) {
          clearInterval(intervalId);
        }
      }

      
    }, [isRunning])
    
    const handleStart = () => {
      setIsRunning(true);
    }

    const handleStop  = () => {
      setIsRunning(false);
    }

    const handleClear = () => {
      setIsRunning(false);
      setTime(0);
    }
    
    return (
      <div className="button-container">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleClear}>Clear</button>
        <div className="timer-display">
            <h1>{time}s</h1>
        </div>
      </div>
    );

}

export default App;
