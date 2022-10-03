export type ReduxFormDataValue = string | number;

export type ReduxFormData = {
  [key: string]: ReduxFormDataValue;
};

export type ReduxFormState = {
  [key: string]: ReduxFormData;
};

export type ReduxFormStatePayloadAction = {
  formName: ReduxForms;
  fieldName: string;
  value: ReduxFormDataValue;
};

export enum ReduxForms {
  survey = 'survey',
}
