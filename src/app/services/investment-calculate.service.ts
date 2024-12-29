import { Injectable } from '@angular/core';
import { IInvestment, IInvestmentResult, IInvestmentResultItem } from '../models/investment.model';
@Injectable({
  providedIn: 'root',
})
export class InvestmentCalculateService {
  constructor() {}
  calculateInvestmentResults(
    investmentdata: IInvestment
  ): IInvestmentResultItem[] {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      investmentdata;
    const annualData: IInvestmentResultItem[] = [];

    // if (!initialInvestment || !annualInvestment || !expectedReturn || !duration) {
    //   return investmentresult;
    // }
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    const investmentresult: IInvestmentResult = {
      investment: investmentdata,
      results: annualData,
    };
    return annualData;
  }
}
