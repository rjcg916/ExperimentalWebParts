import * as React from 'react';
import styles from './PpQuickPoll.module.scss';
import { IPpQuickPollPieChartProps, IPpQuickPollPieChartState } from './IPpQuickPollPieChartProps';
import { escape } from '@microsoft/sp-lodash-subset';


export default class PpQuickPollPieChart extends React.Component<IPpQuickPollPieChartProps, IPpQuickPollPieChartState> {



  public render(): React.ReactElement<IPpQuickPollPieChartProps> {
    
  
  return (
      <div className={ styles.ppQuickPoll }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Pie Chart Component</span>
              <p className={ styles.subTitle }>Pie Chart Goes Here</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>              
            </div>
                </div>
            </div>
          </div>
    );
  }

}