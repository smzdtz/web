export interface IResponse<T> {
  Code: number;
  Data: T;
  Message: string;
}

export interface IStockInfo {
  Secucode: string;
  Name: string;
  SecurityName: string;
  Industry: string;
  Concept: string;
  Profile: string;
  MainBusiness: string;
  Keywords: string[];
  MainForms: {
    Type: string;
    MainForm: string;
    MainIncomeRatio: string;
    MainIncome: string;
    MainIncomeRatioChart: string;
  }[];
  Province: string;
}
