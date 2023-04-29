import React from 'react';
import './App.css';
import LineGraph from './Components/LineGraph';
import BarChartExample from "./Components/BarGraph"


function App() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Wine Data Visualisation</h1>
    <div className='App' style={{display:"flex" , marginTop:"200px"}}>
     
      <LineGraph/>
      <div className="right" style={{display:"flex",float:"right", marginTop:"50px",marginLeft:"150px"}} >
      <BarChartExample/> 
      </div>
    </div>
    </>
  );
}

export default App;
