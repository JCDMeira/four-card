import './App.css';
import React from 'react';
import { Card } from './components/Card';
import imageCard1 from './assets/images/icon-supervisor.svg';
import imageCard2 from './assets/images/icon-team-builder.svg';
import imageCard3 from './assets/images/icon-karma.svg';
import imageCard4 from './assets/images/icon-calculator.svg';

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <div className="content">
          <div className="header">
            <h1>Reliable, efficient delivery</h1>
            <h1>
              <span>Powered by Technology</span>
            </h1>
            <p>
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>
          <div className="fieldCards">
            <div className="field1">
              <Card tittle="Supervisor" image={imageCard1} color="cyan">
                Monitors activity to identify project roadblocks
              </Card>
            </div>
            <div className="field2">
              <Card tittle="Team Builder" image={imageCard2} color="red">
                Scans our talent network to create the optimal team for your
                project
              </Card>
              <Card tittle="Karma" image={imageCard3} color="orange">
                Regularly evaluates our talent to ensure quality
              </Card>
            </div>
            <div className="field3">
              <Card tittle="Calculator" image={imageCard4} color="blue">
                Uses data from past projects to provide better delivery
                estimates
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
