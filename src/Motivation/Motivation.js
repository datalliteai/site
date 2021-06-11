import React, {Component} from 'react';
import Title from '../Title.js';
import Human from './Solidarity-amico.png';
import Data from './Data report-amico.png';
import Ml from './Typing-bro.png';

class Motivation extends Component{
  render(){
    return(
      <section id = "motivation">
      <div className = "wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#CAE8FF" fill-opacity="1" d="M0,64L60,53.3C120,43,240,21,360,37.3C480,53,600,107,720,128C840,149,960,139,1080,133.3C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>

      <Title titleColor = '#0d186e'>Motivation</Title>

          <div className ="row">
            <div className = "column">
              <div class="img_wrap">
                <img src={Human} alt="human"></img>
                <p class="img_description">Hello world!</p>
              </div>
              <h1> Human </h1>
            </div>

            <div className = "column">
              <div class="img_wrap">
                <img src={Data} alt="data"></img>
                <p class="img_description">Hello data!</p>
              </div>
              <h1> Data </h1>
            </div>

            <div className = "column">
              <div class="img_wrap">
                <img src={Ml} alt="ml"></img>
                <p class="img_description">Hello ML!</p>
              </div>
              <h1> AI </h1>
            </div>

          </div>

        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CAE8FF" fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,138.7C480,128,600,96,720,106.7C840,117,960,171,1080,202.7C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>

      </section>
    );
  }
}
export default Motivation;
