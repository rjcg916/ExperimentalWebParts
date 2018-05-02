declare interface IPpQuickPollWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  AdvancedGroupName: string;
  DescriptionFieldLabel: string;
  QuestionFieldLabel : string;
  AnswersFieldLabel : string;
  PublishedFieldLabel : string;
  PieChartFieldLabel : string;
  ExpirationDateFieldLabel ; string;
  SubmitButtonTextFieldLabel : string;
}

declare module 'PpQuickPollWebPartStrings' {
  const strings: IPpQuickPollWebPartStrings;
  export = strings;
}
