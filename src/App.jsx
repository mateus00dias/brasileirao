import { useState, useEffect} from 'react'
import './App.css'
import { getCampeonato } from './services/api';

function App() {
  const[brasileirao, setBrasileirao] = useState([]);
async function fetchData() {
    const response = await getCampeonato("tabela");
    setBrasileirao(response);
} 
console.log(brasileirao);
  useEffect(() => {
    if (brasileirao.length === 0){
      fetchData() ; 
    }
  },[brasileirao])
  return (
    <div className="App">
      <header>
        <h1> Brasileirão 2023 </h1>
        <div className='row'>
          <label> Tabela de classificação </label>
        </div> 
      </header>
      {brasileirao.length === 0 ? (
        <div className "loading" >Caregando... </div>
      ) : (
        <>
        <table>
          <thead>
            <tr>
              
                
              <th/>
              <th/>
              <th classname = "txtleft"> clube</th>
              <th> pts</th>
              <th> partidas</th>
              <th> vitorias</th>
              <th> empates</th>
              <th> Derrotas</th>
              <th> GM</th>
              <th> GC</th>
              <th> SG</th>
              <th> AP</th>
            </tr>
          </thead>
        </table>
        </>
      )
    </div>
  )
}

export default App
