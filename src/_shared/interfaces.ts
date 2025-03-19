import { ReactNode } from "react";

export interface IGenerateForm {
  timerForQuiz: ITimer;
  pages: IFormPages[];
}

export interface ITimer {
  timerSecond: number;
  enabled: boolean;
}

export interface IFormPages {
  id: number;
  questionNumber: string;
  title: string;
  fields: IFormField[];
}

export interface IFormField {
  id: string;
  radioParams?: {
    items: IFormRadioItem[];
  };
  inputParams?: IFormInputItem;
  checkboxParams?: {
    items: IFormCheckboxItem[];
  };
  textareaParams?: IFormTextareaItem;
}

export interface IFormRadioItem {
  id: string;
  content: ReactNode;
}

export interface IFormCheckboxItem extends IFormRadioItem {}

export interface IFormTextareaItem {
  placeholder: string;
}

export interface IFormInputItem extends IFormTextareaItem {}
