import Board from './board';
import Info from "./info";
import "./TicTacToe.css";
import { useState } from 'react'; // useState allows to add state in function component

 // Here i used Function Component 
function App() { 
  
    const [reset, setReset] = useState(false);
  
    const [winner, setWinner] = useState('');
    const resetBoard = () => {
        setReset(true);
    }
  
    return (
        <div className="App">
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>    
                <div className='winner-text'>{winner}</div> {/* Show who is the winner*/}

                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>

            </div>
            <Board reset={reset} setReset={setReset} winner={winner} 
                setWinner={setWinner} />
            <Info /> {/* This Info Component shows only the Player X and Player O */}
        </div>
    );
}
  
export default App;