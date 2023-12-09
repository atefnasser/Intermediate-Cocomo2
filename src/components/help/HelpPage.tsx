// HelpPage.tsx

import React from 'react';

const HelpPage: React.FC = () => {
    return (
      <div className="help-page-container" style={{ padding: '20px' }}>
        {/* Main Title */}
        <h1 style={{ textAlign: 'center', fontSize: '2.5em', fontWeight: 'bold' }}>Understanding Each Scale Factors and Effort Multipliers</h1>

      <section>
      <h2 style={{ fontSize: '2em', fontWeight: 'bold' }}>Scale Factors</h2>
        <ul>
          <li><strong>Project Familiarity:</strong> Measures how familiar the team is with the type of project being undertaken. Higher familiarity often leads to better estimates and project execution.</li>
          <li><strong>Development Flexibility:</strong> How flexible the development process is is related. How much time and resources are needed can change when you have more flexibility.</li>
          <li><strong>Risk Management:</strong> Looks at how well strategies for finding risks and reducing them are working. Surprising delays and costs can be avoided with good risk management.</li>
          <li><strong>Teamwork Quality:</strong> Shows how well the team works together and talks to each other. Good teamwork can make things run more smoothly and help solve problems faster.</li>
          <li><strong>Process Experience:</strong> Describes how familiar the team is with the method or process being used for the project.</li>
          {/* Add additional scale factors as needed */}
        </ul>
      </section>

      <section>
      <h2 style={{ fontSize: '2em', fontWeight: 'bold' }}>Effort Multipliers</h2>
        <ul>
          <li><strong>Reliability Need:</strong> The level of how reliable and error-free the software needs to be. Needs for higher reliability can make development take longer and cost more.</li>
          <li><strong>Database Size:</strong> This number tells you how much data the software can handle. Having bigger databases can make things more complicated and slow down operations.</li>
          <li><strong>Complexity Level:</strong> Calculates how hard the project is to do properly.  Complex problems usually take longer and need more skilled workers.</li>
          <li><strong>Reusability Requirement:</strong> Indicates if the software or its components are intended to be reusable in other projects.</li>
          <li><strong>Documentation Need:</strong> Exactly how much detailed documentation is needed. Detail-oriented documents may need more time and resources.</li>
          <li><strong>Performance Constraint:</strong> Limits on how well the software works, like how fast it responds or processes information, etc.</li>
          <li><strong>Memory Usage:</strong> Estimates about how much memory the software will need. Using a lot of memory can slow things down and make hardware requirements more strict.</li>
          <li><strong>Platform Stability:</strong> Checks to see how stable and developed the platform(s) are that the software will run on.</li>
          <li><strong>Analyst Skill:</strong> The level of skill and expertise of the analysts involved in the project.</li>
          <li><strong>Programmer Skill:</strong> The skill level of the programmers or developers working on the project.</li>
          <li><strong>Team Stability:</strong> Refers to how stable the team's members are. Changing the people on a team often can make it harder to keep working on a project.</li>
          <li><strong>App Experience:</strong> The team's experience with the specific application domain of the project.</li>
          <li><strong>Platform Experience:</strong> Measures the team’s familiarity with the platform(s) used for development.</li>
          <li><strong>Tech Tool Proficiency:</strong> How well the team can use the technical tools that are needed for the project.</li>
          <li><strong>Use of Software Tools:</strong> The extent to which software tools are employed in the development process.</li>
          <li><strong>Multisite Development:</strong> Involves projects being developed across multiple locations, which can add complexity and communication challenges.</li>
          <li><strong>Required Development Schedule:</strong> The time frame within which the project needs to be completed. Tighter schedules can increase pressure and potentially impact quality.</li>
          {/* Add additional effort multipliers as needed */}
        </ul>
      </section>
    </div>
  );
};

export default HelpPage;
