// src/pages/history/HistoryPage.tsx

import React from 'react';
import { useHistory } from '../../components/history/HistoryContext';
import "./history-style.css";


const HistoryPage = () => {
    const { history } = useHistory();
  
    return (
        <div className="history-container">
          {history.map((entry, index) => (
            <div key={index} className="history-entry">
              <h2>Calculation {index + 1}</h2>
              <div className="table-container">
                <div className="table-section">
                  <h3>Project Size</h3>
                  <p>{entry.projectSize} KLOC</p>
                </div>
                <div className="table-section">
                  <h3>Scale Factors</h3>
                  <ul>
                    {Object.entries(entry.scaleFactors).map(([factor, level]) => (
                      <li key={factor}>{factor}: {level}</li>
                    ))}
                  </ul>
                </div>
                <div className="table-section">
                  <h3>Effort Multipliers</h3>
                  <ul>
                    {Object.entries(entry.effortMultipliers).map(([multiplier, level]) => (
                      <li key={multiplier}>{multiplier}: {level}</li>
                    ))}
                  </ul>
                </div>
                <div className="calculation-section">
                  <h3>Calculation</h3>
                  <p>Effort: {entry.effort.toFixed(2)} Person-Months</p>
                  <p>Development Time: {entry.developmentTime.toFixed(2)} Months</p>
                  <p>Staffing: {entry.staffing.toFixed(2)} Persons</p>
                  <p>Estimated Cost: {entry.cost.toFixed(2)} Dollars</p> 
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default HistoryPage;