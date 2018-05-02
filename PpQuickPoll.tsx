import * as React from 'react';
import styles from './PpQuickPoll.module.scss';
import { IPpQuickPollProps, IPpQuickPollState } from './IPpQuickPollProps';
import * as PpQuickPollBarChart  from './PpQuickPollBarChart';
import * as PpQuickPollPieChart  from './PpQuickPollPieChart';

import { escape } from '@microsoft/sp-lodash-subset';


export default class PpQuickPoll extends React.Component<IPpQuickPollProps, IPpQuickPollState> {



  public render(): React.ReactElement<IPpQuickPollProps> {
    
  
//    const anAnswer: JSX.Element = <div> <input onChange={() => {return this.answerChanged(answer);}} type='radio' id={answer} name="answer" value={answer} /> <label htmlFor={answer}>{answer}</label> </div> ;} )}</div>;
//    const answerList: JSX.Element = this.props.answers ? <div>{this.props.answers.split(';').map(answer => {return <div> <input onChange={() => {return this.answerChanged(answer);}} type='radio' id={answer} name="answer" value={answer} /> <label htmlFor={answer}>{answer}</label> </div> ;} )}</div> : <div>Please provide Answers</div>;
    const answerList: JSX.Element = this.props.answers ? <div>{this.props.answers.split(';').map(answer => {return <div> <input onChange={() => {return this.answerChanged(answer);}} type='radio' id={answer} name="answer" value={answer} /> <label htmlFor={answer}>{answer}</label> </div> ;} )}</div> : <div>Please provide Answers</div>;
    const response: JSX.Element = <div><input type='submit' onClick={() => { this.recordAnswer(this.state.selectedAnswer); } } value={this.props.submitbuttontext} /></div>;     
    return (
      <div className={ styles.ppQuickPoll }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.question)}</p>
              {answerList}
              {response}
              
            
            </div>
                </div>
            </div>
          </div>
    );
  }

  private recordAnswer(answer: string): void {
    alert(answer);
  }

  private answerChanged(newValue: string): void {
    this.setState((prevState: IPpQuickPollState, props: IPpQuickPollProps): IPpQuickPollState => {
      prevState.selectedAnswer = newValue;
      return prevState;
    });
  }
}
