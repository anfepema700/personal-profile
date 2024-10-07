export interface PersonalProfile {
  idUser: number;
  document: string;
  user: string;
  password: string;
  name: string;
  lastname: string;
  address?: string;
  phone?: string;
  city?: string;
  country?: string;
  state: boolean;
  bank?: string;
  accountBank?: string;
  cardShow?: number;
}
export interface AccountLogin {
  user: string;
  password: string;
}
export interface Contributions {
  idContribution: number;
  idUser: number;
  amount: number;
  date: string;
  description: string;
}
export interface ResumeDataProfile extends PersonalProfile {
  totalAmount: number;
}
