import { IDateTimeFieldValue } from "@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker";

export interface IPpQuickPollProps {
  description : string;
  question : string;
  answers: string;
  published : boolean;
  piechart : boolean;
  expirationdatetime : IDateTimeFieldValue;
  submitbuttontext  : string;
}

export interface IPpQuickPollState {
  selectedAnswer: string;
}