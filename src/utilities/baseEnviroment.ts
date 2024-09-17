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
  },
];
export let contributionsGenerated: Contributions[] = [
  {
    idUser: 1,
    amount: 1000,
    date: "2024-09-17",
  },
];
