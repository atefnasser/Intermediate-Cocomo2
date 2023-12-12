import React from 'react';

const HelpPage: React.FC = () => {
    return (
      <div className="help-page-container" style={{ padding: '20px' }}>
        {/* Main Title */}
        <h1 style={{ textAlign: 'center', fontSize: '2.5em', fontWeight: 'bold' }}>Understanding Each Scale Factor and Effort Multiplier</h1>

      <section>
      <h2 style={{ fontSize: '2em', fontWeight: 'bold' }}>Scale Factors</h2>
        <ul>
          <li><strong>Precedentedness (PREC):</strong> Measures how familiar the team is with the type of project being undertaken. Higher familiarity often leads to better estimates and project execution.</li>
          <li><strong>Development Flexibility (FLEX):</strong> Flexibility of the development process. More flexibility can lead to less predictable time and resource requirements.</li>
          <li><strong>Architecture/Risk Resolution (RESL):</strong> Assesses the efficacy of risk identification and mitigation strategies. Effective risk management can prevent unexpected delays and costs.</li>
          <li><strong>Team Cohesion (TEAM):</strong> Indicates how well the project team communicates and works together. Cohesive teams can resolve issues more efficiently.</li>
          <li><strong>Process Maturity (PMAT):</strong> Reflects the team's familiarity with the process or methodology used for the project.</li>
        </ul>
      </section>

      <section>
      <h2 style={{ fontSize: '2em', fontWeight: 'bold' }}>Effort Multipliers</h2>
        <ul>
          <li><strong>Required Software Reliability (RELY):</strong> The level of stability and freedom from bugs required in the software. Higher reliability demands can increase development time and cost.</li>
          <li><strong>Data Base Size (DATA):</strong> The size of the database the software must handle. Larger databases can increase complexity and processing time.</li>
          <li><strong>Product Complexity (CPLX):</strong> Measures the complexity of the project. More complex projects usually require more time and skilled personnel.</li>
          <li><strong>Developed for Reusability (RUSE):</strong> Indicates if the software or its components are intended to be reusable in other projects.</li>
          <li><strong>Documentation Match to Life-Cycle Needs (DOCU):</strong> The level of detailed documentation required. More detailed documentation may require additional time and resources.</li>
          <li><strong>Execution Time Constraint (TIME):</strong> Constraints on the software's operational performance, such as speed of response or processing times.</li>
          <li><strong>Main Storage Constraint (STOR):</strong> Estimates the amount of memory the software will require. High memory usage can impose more stringent hardware requirements.</li>
          <li><strong>Platform Volatility (PVOL):</strong> Assesses how stable and mature the platforms are that the software will run on.</li>
          <li><strong>Analyst Capability (ACAP):</strong> The skill level and expertise of the analysts involved in the project.</li>
          <li><strong>Programmer Capability (PCAP):</strong> The capability of the programmers or developers working on the project.</li>
          <li><strong>Personnel Continuity (PCON):</strong> Measures the stability of the project team. Frequent staff turnover can disrupt project continuity.</li>
          <li><strong>Applications Experience (APEX):</strong> The team's experience with the specific application domain of the project.</li>
          <li><strong>Platform Experience (PLEX):</strong> The team’s familiarity with the platform(s) used for development.</li>
          <li><strong>Language and Tool Experience (LTEX):</strong> How well the team can use the technical tools that are necessary for the project.</li>
          <li><strong>Use of Software Tools (TOOL):</strong> The extent to which software tools are employed in the development process.</li>
          <li><strong>Multisite Development (SITE):</strong> Involves projects being developed across multiple locations, which can add complexity and communication challenges.</li>
          <li><strong>Required Development Schedule (SCED):</strong> The timeframe within which the project needs to be completed. Tighter schedules can increase pressure and potentially impact quality.</li>
        </ul>
      </section>
    </div>
  );
};

export default HelpPage;
