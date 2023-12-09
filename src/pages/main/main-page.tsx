import React, { useState } from 'react';
import { useHistory } from '../../components/history/HistoryContext';


const MainPage = () => {
  // Initialize selections state with default 'Average' values
  const [selections, setSelections] = useState({
    scaleFactors: {
      'Project Familiarity': 'Average',
      'Development Flexibility': 'Average',
      'Risk Management': 'Average',
      'Teamwork Quality': 'Average',
      'Process Experience': 'Average'
    },
    effortMultipliers: {
      'Reliability Need': 'Average',
      'Database Size': 'Average',
      'Complexity Level': 'Average',
      'Reusability Requirement': 'Average',
      'Documentation Need': 'Average',
      'Performance Constraint': 'Average',
      'Memory Usage': 'Average',
      'Platform Stability': 'Average',
      'Analyst Skill': 'Average',
      'Programmer Skill': 'Average',
      'Team Stability': 'Average',
      'App Experience': 'Average',
      'Platform Experience': 'Average',
      'Tech Tool Proficiency': 'Average',
      'Use of Software Tools': 'Average',
      'Multisite Development': 'Average',
      'Required Development Schedule': 'Average'
    }
  });

  // Other state variables
  const [projectSize, setProjectSize] = useState('');
  const [effort, setEffort] = useState(0);
  const [deploymentTime, setDeploymentTime] = useState(0);
  const [staffing, setStaffing] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [annualWage, setAnnualWage] = useState('');

  // Scale factors and effort multipliers (same as provided by you)
  const SFs = {
    'Project Familiarity': { 'Very Low': 6.20, 'Low': 4.96, 'Average': 3.72, 'High': 2.48, 'Very High': 1.24 },
    'Development Flexibility': { 'Very Low': 5.07, 'Low': 4.05, 'Average': 3.04, 'High': 2.03, 'Very High': 1.01 },
    'Risk Management': { 'Very Low': 7.07, 'Low': 5.65, 'Average': 4.24, 'High': 2.83, 'Very High': 1.41 },
    'Teamwork Quality': { 'Very Low': 5.48, 'Low': 4.38, 'Average': 3.29, 'High': 2.19, 'Very High': 1.10 },
    'Process Experience': { 'Very Low': 7.80, 'Low': 6.24, 'Average': 4.68, 'High': 3.12, 'Very High': 1.56 }
  };

  const EMs = {
    'Reliability Need': { 'Very Low': 0.82, 'Low': 0.92, 'Average': 1.00, 'High': 1.10, 'Very High': 1.26 },
    'Database Size': { 'Low': 0.90, 'Average': 1.00, 'High': 1.14, 'Very High': 1.28 },
    'Complexity Level': { 'Very Low': 0.73, 'Low': 0.87, 'Average': 1.00, 'High': 1.17, 'Very High': 1.34 },
    'Reusability Requirement': { 'Low': 0.95, 'Average': 1.00, 'High': 1.07, 'Very High': 1.15 },
    'Documentation Need': { 'Very Low': 0.81, 'Low': 0.91, 'Average': 1.00, 'High': 1.11, 'Very High': 1.23 },
    'Performance Constraint': { 'Average': 1.00, 'High': 1.11, 'Very High': 1.29, 'Extra High': 1.63 },
    'Memory Usage': { 'Average': 1.00, 'High': 1.05, 'Very High': 1.17, 'Extra High': 1.46 },
    'Platform Stability': { 'Low': 0.87, 'Average': 1.00, 'High': 1.15, 'Very High': 1.30 },
    'Analyst Skill': { 'Very Low': 1.42, 'Low': 1.19, 'Average': 1.00, 'High': 0.85, 'Very High': 0.71 },
    'Programmer Skill': { 'Very Low': 1.34, 'Low': 1.15, 'Average': 1.00, 'High': 0.88, 'Very High': 0.76 },
    'Team Stability': { 'Very Low': 1.29, 'Low': 1.12, 'Average': 1.00, 'High': 0.90, 'Very High': 0.81 },
    'App Experience': { 'Very Low': 1.22, 'Low': 1.10, 'Average': 1.00, 'High': 0.88, 'Very High': 0.81 },
    'Platform Experience': { 'Very Low': 1.19, 'Low': 1.09, 'Average': 1.00, 'High': 0.91, 'Very High': 0.85 },
    'Tech Tool Proficiency': { 'Very Low': 1.20, 'Low': 1.09, 'Average': 1.00, 'High': 0.91, 'Very High': 0.84 },
    'Use of Software Tools': { 'Very Low': 1.17, 'Low': 1.09, 'Average': 1.00, 'High': 0.90, 'Very High': 0.78 },
    'Multisite Development': { 'Very Low': 1.22, 'Low': 1.09, 'Average': 1.00, 'High': 0.93, 'Very High': 0.86 },
    'Required Development Schedule': { 'Very Low': 1.43, 'Low': 1.14, 'Average': 1.00, 'High': 1.00, 'Very High': 1.00 }
  };


  const { addHistoryEntry } = useHistory();

  // Handle selection for radio buttons
  const handleSelection = (category, factor, selectedOption) => {
    setSelections(prevSelections => ({
      ...prevSelections,
      [category]: {
        ...prevSelections[category],
        [factor]: selectedOption
      }
    }));
  };

  const handleSubmit = () => {
    console.log('Submit clicked'); // To check if the function is called

    // Ensure projectSize is a number
    const sizeInKLOC = parseFloat(projectSize);
    if (isNaN(sizeInKLOC)) {
      console.error('Project size is not a valid number');
      return;
    }

    const annualWageValue = parseFloat(annualWage);
    if (isNaN(annualWageValue)) {
      console.error('Annual wage is not a valid number');
      return;
    }
    const monthlyWage = annualWageValue / 12;



    let sumSF = 0;
    Object.entries(selections['scaleFactors'] || {}).forEach(([factor, level]) => {
      const value = SFs[factor]?.[level];
      if (value) {
        sumSF += value;
      } else {
        console.error(`Scale factor value for ${factor} at level ${level} is undefined`);
      }
    });

    let productEM = 1;
    Object.entries(selections['effortMultipliers'] || {}).forEach(([multiplier, level]) => {
      const value = EMs[multiplier]?.[level];
      if (value) {
        productEM *= value;
      } else {
        console.error(`Effort multiplier value for ${multiplier} at level ${level} is undefined`);
      }
    });



    const A = 2.94;
    const B = 0.91;
    const C = 3.67;
    const D = 0.28;

    const E = B + 0.01 * sumSF;
    const calculatedEffort = A * Math.pow(sizeInKLOC, E) * productEM;
    const developmentTime = C * Math.pow(calculatedEffort, (D + 0.2 * (E - B)));
    const calculatedStaffing = calculatedEffort / developmentTime;
    const estimatedCost = calculatedEffort * monthlyWage;

    console.log('Calculated Effort:', calculatedEffort);
    console.log('Calculated Development Time:', developmentTime);
    console.log('Calculated Staffing:', calculatedStaffing);
    console.log('Calculated Cost:', estimatedCost);

    setEffort(calculatedEffort);
    setDeploymentTime(developmentTime);
    setStaffing(calculatedStaffing);
    setTotalCost(estimatedCost);

    addHistoryEntry({
      projectSize: sizeInKLOC,
      annualWage: annualWageValue,
      scaleFactors: selections.scaleFactors,
      effortMultipliers: selections.effortMultipliers,
      effort: calculatedEffort,
      developmentTime: developmentTime,
      staffing: calculatedStaffing,
      cost: estimatedCost // Add this line to include the cost in the history
    });
  };

  const handleReset = () => {
    // Resetting all the state variables to their default values
    setSelections({
      scaleFactors: {
        'Project Familiarity': 'Average',
        'Development Flexibility': 'Average',
        'Risk Management': 'Average',
        'Teamwork Quality': 'Average',
        'Process Experience': 'Average'
      },
      effortMultipliers: {
        'Reliability Need': 'Average',
        'Database Size': 'Average',
        'Complexity Level': 'Average',
        'Reusability Requirement': 'Average',
        'Documentation Need': 'Average',
        'Performance Constraint': 'Average',
        'Memory Usage': 'Average',
        'Platform Stability': 'Average',
        'Analyst Skill': 'Average',
        'Programmer Skill': 'Average',
        'Team Stability': 'Average',
        'App Experience': 'Average',
        'Platform Experience': 'Average',
        'Tech Tool Proficiency': 'Average',
        'Use of Software Tools': 'Average',
        'Multisite Development': 'Average',
        'Required Development Schedule': 'Average'
      }
    });
    setProjectSize('');
    setEffort(0);
    setDeploymentTime(0);
    setStaffing(0);
    setTotalCost(0);
    setAnnualWage('');
  };

  const options = ['Very Low', 'Low', 'Average', 'High', 'Very High'];


  // Helper function to generate scale factor radio buttons
  const renderScaleFactorOptions = (factor) => {
    return options.map(level => (
      <td key={level} style={{ border: '1px solid #ddd', textAlign: 'center', width: '12.5%' }}>
        <label>
          <input
            type="radio"
            name={factor}
            value={level}
            checked={selections.scaleFactors[factor] === level}
            onChange={(e) => handleSelection('scaleFactors', factor, e.target.value)}
          />
        </label>
      </td>
    ));
  };

  // Helper function to generate effort multiplier radio buttons
  const renderEffortMultiplierOptions = (multiplier) => {
    return options.map(level => (
      <td key={level} style={{ border: '1px solid #ddd', textAlign: 'center', width: '12.5%' }}>
        <label>
          <input
            type="radio"
            name={multiplier}
            value={level}
            checked={selections.effortMultipliers[multiplier] === level}
            onChange={(e) => handleSelection('effortMultipliers', multiplier, e.target.value)}
          />
        </label>
      </td>
    ));
  };



  return (
    <div className="p-8">


      {/* Project Size Input */}
      <div className="mb-8">
        <label htmlFor="project-size" className="block text-xl font-medium text-gray-700 mb-2">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Project Size (KLOC)</h2>
        </label>
        <input
          type="text"
          id="project-size"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter project size in KLOC"
          value={projectSize}
          onChange={(e) => setProjectSize(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="project-size" className="block text-xl font-medium text-gray-700 mb-2">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Annual Developer Wage</h2>
        </label>
        <input
          type="text"
          id="annual-wage"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter annual developer wage"
          value={annualWage}
          onChange={(e) => setAnnualWage(e.target.value)}
        />
      </div>

      {/* Scale Factors Table */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Scale Factors</h2>
        <table className="table-fixed w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Factor</th>
              {options.map((option, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2">{option}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(SFs).map(factor => (
              <tr key={factor}>
                <td className="border border-gray-300 px-4 py-2">{factor}</td>
                {renderScaleFactorOptions(factor)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Effort Multipliers Table */}
      <div>
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Effort Multipliers</h2>
        <table className="table-fixed w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Multiplier</th>
              {options.map((option, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2">{option}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(EMs).map(multiplier => (
              <tr key={multiplier}>
                <td className="border border-gray-300 px-4 py-2">{multiplier}</td>
                {renderEffortMultiplierOptions(multiplier)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Calculate Button */}
      <div className="mt-6 flex justify-center">
        <button
          className="hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          style={{ backgroundColor: '#92BED3' }}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="ml-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          style={{ backgroundColor: '#F56565' }}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>


      {/* Results Display */}
      {effort !== null && (
        <div className="mt-4">
          <p>Effort: {effort.toFixed(6)} Person-Months</p>
          <p>Development Time: {deploymentTime.toFixed(6)} Months</p>
          <p>Staffing: {staffing.toFixed(6)} Persons</p>
          <p>Estimated Cost: {totalCost.toFixed(2)} Dollars</p>
        </div>
      )}
    </div>
  );

};

export default MainPage;