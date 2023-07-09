export interface ICareerDetail {
  title: string;
  stack: string[];
}

export interface ICareerArr {
  company: string;
  date: string;
  detail: ICareerDetail[];
}
