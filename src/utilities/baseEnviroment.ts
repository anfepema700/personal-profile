import {
  Contributions,
  PersonalProfile,
} from "../models/personal-profile.model";

export let userDataProfile: PersonalProfile[] = [
  {
    idUser: 1,
    document: "98673984",
    user: "sandra",
    password: "98673984",
    name: "Sandra",
    lastname: "Alfaro",
    phone: "N/A",
    city: "Chelse, Ma",
    country: "USA",
    state: true,
    address: "Calle 1 # 2-3",
    bank: "N/A",
    accountBank: "N/A",
    cardShow: 1,
  },
  {
    idUser: 2,
    document: "1700581905",
    user: "luis",
    password: "1700581905",
    name: "Luis",
    lastname: "Vargas Bedoya",
    phone: "N/A",
    city: "Ayutla de los libres",
    country: "Mexico",
    state: true,
    address: "C independencia sn loc el cortijo 39204",
    bank: "N/A",
    accountBank: "N/A",
    cardShow: 2,
  },
];
export let contributionsGenerated: Contributions[] = [
  {
    idUser: 1,
    amount: 1000,
    date: "2024-09-17",
    description: "Inversión inicial",
  },
  {
    idUser: 1,
    amount: 1000,
    date: "2024-09-23",
    description: "Aporte bono inversión inicial",
  },
  {
    idUser: 2,
    amount: 25100,
    date: "2024-09-20",
    description: "Depósito dirigido",
  },
  {
    idUser: 1,
    amount: 1500,
    date: "2024-09-23",
    description: "Aporte",
  },
];
