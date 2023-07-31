import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loanValue: number): void => {
    if (this.getStatus()) {
      this.balance += loanValue;
      console.log(
        `You got a loan of ${loanValue}. Your new balance now is ${this.balance}`
      );
    }
  };
}
