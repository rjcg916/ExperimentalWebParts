import * as React from 'react';
import styles from './PpQuickPoll.module.scss';
import { IPpQuickPollBarChartProps, IPpQuickPollBarChartState } from './IPpQuickPollBarChartProps';
import { escape } from '@microsoft/sp-lodash-subset';


export default class PpQuickPollBarChart extends React.Component<IPpQuickPollBarChartProps, IPpQuickPollBarChartState> {



  public render(): React.ReactElement<IPpQuickPollBarChartProps> {
    
  
  return (
      <div className={ styles.ppQuickPoll }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Bar Chart Component</span>
              <p className={ styles.subTitle }>Bar Chart Goes Here</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>              
            </div>
                </div>
            </div>
          </div>
    );
  }

}
