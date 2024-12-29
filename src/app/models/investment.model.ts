export interface IInvestment {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface IInvestmentResult {
  investment: IInvestment;
  results: IInvestmentResultItem[];
}

export interface IInvestmentResultItem {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
