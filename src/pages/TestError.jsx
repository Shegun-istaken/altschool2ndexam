import ErrorBoundary from "../components/ErrorBoundary";
import {useState} from "react";

  
  function Bomb() {
    throw new Error('💥 CABOOM 💥')
  }
  
  function ErrorTest() {
    const [explode, setExplode] = useState(false)
    
    return (
      <div>
        <button onClick={() => setExplode(e => !e)}>toggle explode</button>
        <ErrorBoundary>
          {explode ? <Bomb /> : null}
        </ErrorBoundary>
      </div>
    )
  }

  export default ErrorTest;