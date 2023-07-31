import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.deposit(150);
peopleAccount.withdraw(150);
peopleAccount.withdraw(150);
peopleAccount.deposit(15);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(130);
companyAccount.withdraw(130);
companyAccount.withdraw(130);
companyAccount.deposit(15);
console.log(companyAccount);
