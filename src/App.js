import logo from './logo.svg';
import './App.css';
import Start from './Start';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="titulo">Pense bem</h1>

        <form>

         <p><input type="text" id="visor1" value="*"readonly ></input></p>
         <p><input type="text" id="visor2" readonly ></input></p>

         <p>
          <input type="button"id="botaoA" value="A" />
          <input type="button"id="botaoB" value="B" />
          <input type="button"id="botaoC" value="C" />
          <input type="button"id="botaoD" value="D" />
         </p>

         <Start />
        </form>
        
        
      </header>
    </div>
  );
}

export default App;