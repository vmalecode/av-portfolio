
const Experience = () => {
  return (

    <div className="experience">
      <div className="Subheader1">
        <div className="Subheader1Label">Education</div>
        <div className="Subheader2Label">Northeastern University</div>
        <div className="Subheader2Right">Seattle, Washington</div>
        <div className="Subheader3Label">MS in computer science candidate, GPA: <span id="GPA"> 4.00/4.00</span> </div>
        <div className="Subheader3Date">May 2023</div>
        <div className="Subheader3Content">Relevant Coursework: Computer Systems, Algorithms, Object-Oriented Design, Discrete Structures</div>
        <div className="Subheader2Label">University of Alaska Fairbanks</div>
        <div className="Subheader2Right">Fairbanks, Aalska</div>
        <div className="Subheader3Label">BS in Mechanical Engineering, GPA: <span id="GPA"> 3.50/4.00</span></div>
        <div className="Subheader3Date">May 2017</div>
      </div>
      <div className="Subheader1">
        <div className="Subheader1Label">Experience</div>
        <div className="Subheader2Label">The Boeing Company</div>
        <div className="Subheader2Right">Everett, Washington</div>

        <div className="Subheader2Label">Manufacturing Engineer (Boeing 777-9)</div>
        <div className="Subheader2Right">June 2023 - Current</div>
        <div className="Subheader3Content">
          <ul>
            <li>Developed model to analyze stack up tolerance in composite wing and compute shimming solution to reduce production flow of 777-9 wings by 12 manufacturing days</li>
          </ul>
        </div>
        <div className="Subheader2Label">Propulsion Engineer	(Boeing 777-9)</div>
        <div className="Subheader2Right">February 2020 - October 2020</div>
        <div className="Subheader3Content">
          <ul>
            <li>Automated business processes and eliminated data entry tasks in various web apps with VBA, saving hundreds of engineering hours while improving accuracy and correctness</li>
            <li>Integrated propulsion test program efforts for 777-9 GE9X certification program</li>
            <li>Worked with a diverse team of engineers, commodity owners, functional testers to ensure part availability, test schedules, and type compliance
            </li>
          </ul>
        </div>

        <div className="Subheader2Label">Manufacturing Engineer (Boeing 767-2C)</div>
        <div className="Subheader2Right">May 2018 - February 2020</div>
        <div className="Subheader3Content">
          <ul>
            <li>Project manager for projects involving multiple commodity owners, engineering teams, suppliers</li>
            <li>Managed cost and improvement projects for the 41/43 section of the 767-2C / KC-46 Tanker involving multiple organizations including tooling, manufacturing, design engineering
            </li>
            <li>Designed, tested, and implemented new tooling and tooling revisions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience