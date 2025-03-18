export interface IGenerateForm {
  timerForQuiz: ITimerForQuiz;
  pagesForQuiz: IPagesForQuiz[];
}

export interface ITimerForQuiz {
  timerSecond: number;
  enabled: boolean;
}

export interface IPagesForQuiz {
  id: number;
  questionNumber: string;
  title: string;
  fields: IFields[];
}

export interface IFields {
  id: string;
  radioParams?: {
    items: IRadioItem[];
  };
  inputParams?: IInputItem;
  checkboxParams?: {
    items: ICheckboxItem[];
  };
  textareaParams?: ITextareaItem;
}

export interface IRadioItem {
  id: string;
  content: string;
}

export interface IInputItem {
  placeholder: string;
}

export interface ICheckboxItem {
  id: string;
  content: string;
}

export interface ITextareaItem {
  placeholder: string;
}
