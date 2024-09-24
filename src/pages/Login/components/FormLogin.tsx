import { AccountLogin } from "../../../models/personal-profile.model";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import { userDataProfile } from "../../../utilities/baseEnviroment";
import { useNavigate } from "react-router-dom";
import { storeData } from "../../../utilities/localStorage";

function FormLogin(): JSX.Element {
  const [valuePassword, setValuePassword] = useState<string>("");
  const [valueUser, setValueUser] = useState<string>("");
  const [validateAccess, setValidateAccess] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<boolean>(false);
  const navigate = useNavigate();

  const { handleSubmit } = useForm<AccountLogin>({ mode: "onChange" });
  const onSubmit: SubmitHandler<AccountLogin> = async (data: AccountLogin) => {
    const FindUserAndValidateAccess = userDataProfile.find((user) => {
      return (
        user.user.toLowerCase() === valueUser.toLocaleLowerCase() &&
        user.password === valuePassword
      );
    });
    if (FindUserAndValidateAccess) {
      storeData("idUser", FindUserAndValidateAccess?.idUser);
      setValidateAccess(false);
      setValuePassword("");
      setValueUser("");
      if (FindUserAndValidateAccess.cardShow === 1) {
        navigate("/personal-profile");
      } else if (FindUserAndValidateAccess.cardShow === 2) {
        navigate("/personal-profile-second");
      }
    } else {
      setValidateAccess(true);
    }
  };

  useEffect(() => {
    setActiveButton(valuePassword && valueUser ? true : false);
  }, [valuePassword, valueUser]);
  return (
    <form className="col-12 formgroup m-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="m-4 p-fluid">
        <FloatLabel>
          <InputText
            name="username"
            id="username"
            autoFocus
            value={valueUser}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValueUser(e.target.value);
            }}
          />
          <label htmlFor="username">Usuario</label>
        </FloatLabel>
      </div>
      <div className="m-4 p-fluid">
        <FloatLabel>
          <Password
            name="password"
            toggleMask
            feedback={false}
            inputId="password"
            value={valuePassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValuePassword(e.target.value)
            }
          />
          <label htmlFor="password">Contraseña:</label>
        </FloatLabel>
        {validateAccess && (
          <p className="p-error">Usuario o contraseña incorrecto</p>
        )}
      </div>
      <div className=" m-4 text-center">
        <Button
          type="submit"
          label="ingresar"
          disabled={!activeButton}
          className="text-white"
        />
      </div>
    </form>
  );
}

export default FormLogin;
