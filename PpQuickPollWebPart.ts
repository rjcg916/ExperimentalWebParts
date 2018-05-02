import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';

import { PropertyFieldDateTimePicker, 
  DateConvention, 
  TimeConvention,
  IDateTimeFieldValue 
} from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';


import * as strings from 'PpQuickPollWebPartStrings';
import PpQuickPoll from './components/PpQuickPoll';
import { IPpQuickPollProps } from './components/IPpQuickPollProps';

export interface IPpQuickPollWebPartProps {
  description: string;
  question : string;
  answers: string;
  published: boolean;
  piechart: boolean;
  expirationdatetime: IDateTimeFieldValue;
  submitbuttontext: string;
}

export default class PpQuickPollWebPart extends BaseClientSideWebPart<IPpQuickPollWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPpQuickPollProps > = React.createElement(
      PpQuickPoll,
      {
        description: this.properties.description,
        question: this.properties.question,
        answers :  this.properties.answers,
        published : this.properties.published,
        piechart: this.properties.piechart,
        expirationdatetime: this.properties.expirationdatetime,
        submitbuttontext : this.properties.submitbuttontext
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('question', {
                  label: strings.QuestionFieldLabel,
                  multiline: false
                }),
                PropertyPaneTextField('answers', {
                  label: strings.AnswersFieldLabel,
                  multiline: false
                }),
                PropertyPaneToggle('published', { 
                  label: strings.PublishedFieldLabel
                }),
                PropertyPaneToggle('piechart', { 
                  label: strings.PieChartFieldLabel
                }),
                PropertyFieldDateTimePicker('expirationdatetime', {
                  label:  strings.ExpirationDateFieldLabel,
                  initialDate: this.properties.expirationdatetime,
                  dateConvention: DateConvention.DateTime,
                  timeConvention: TimeConvention.Hours12,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'expirationDateTimeFieldId'
                })         
              ]
            }
          ]
        } ,
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.AdvancedGroupName,
              groupFields: [        
                PropertyPaneTextField('submitbuttontext', {
                  label : strings.SubmitButtonTextFieldLabel
                })          
              ]
            }
          ]
        }        
      ]
    };
  }
}
