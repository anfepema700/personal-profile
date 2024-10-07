import { Contributions } from "../../../models/personal-profile.model";

export const personalProfileAdapter = (data: Contributions[]) => {
  return data.sort((a, b) => b.idContribution - a.idContribution);
};
