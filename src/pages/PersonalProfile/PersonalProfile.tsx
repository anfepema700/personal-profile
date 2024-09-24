import { Image } from "primereact/image";
import logoServos from "../../assets/logo_servos.jpg";
import { useEffect, useState } from "react";
import {
  contributionsGenerated,
  userDataProfile,
} from "../../utilities/baseEnviroment";
import {
  Contributions,
  ResumeDataProfile,
} from "../../models/personal-profile.model";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function PersonalProfile(): JSX.Element {
  const idUser = localStorage.getItem("idUser");
  const [dataProfile, setDataProfile] = useState<ResumeDataProfile>();
  const [resumeContributions, setResumeContributions] = useState<
    Contributions[]
  >([]);
  useEffect(() => {
    if (idUser) {
      const findDataUser = userDataProfile.find(
        (user) => user.idUser === +idUser
      );
      const ContributedAmountFind = contributionsGenerated.filter(
        (contributed) => {
          return contributed.idUser === +idUser;
        }
      );
      setResumeContributions(ContributedAmountFind);
      const sumaAportes = ContributedAmountFind.reduce((acc, cur) => {
        return acc + cur.amount;
      }, 0);
      if (findDataUser) {
        const dataForResume: ResumeDataProfile = {
          ...findDataUser,
          totalAmount: +sumaAportes,
        };
        setDataProfile(dataForResume);
      }
    }
  }, [idUser]);

  useEffect(() => {
    if (!idUser?.length) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="grid ml-6">
      <h1 className="text-center col-12 md:col-8 sm:col-12">
        Centro Espiritual Imandade Servos De Jesús
      </h1>
      <div className="grid text-center">
        <div className="col-6 ml-6">
          <h2>Membresía VIP empleados</h2>
          <p className="text-justify">
            Este fondo se hizo con el fin de poder brindarle a nuestros Maestros
            la posibilidad de generar ahorros significativos, los cuales pueden
            ceder en cualquier momento a un familiar o a quien crean pertinente
          </p>
        </div>
        <div className="col-3 ml-6">
          <Image src={logoServos} alt="Image" width="150" />
        </div>
      </div>
      <div className="col-12 grid">
        <h2 className="ml-3 text-center col-6">Información personal</h2>
        <div className="col-6 ml-6 sm:col-12 grid">
          <div className="col">
            <p>
              <strong>Propietario: </strong>
              {`${dataProfile?.name} ${dataProfile?.lastname}`}
            </p>
            <p>
              <strong>Documento: </strong>
              {dataProfile?.document}
            </p>
            <p>
              <strong>Dirección: </strong>
              {dataProfile?.address}
            </p>

            <p>
              <strong>Cuenta: </strong>
              {dataProfile?.accountBank}
            </p>
            <p>
              <strong>Banco: </strong>
              {dataProfile?.bank}
            </p>
          </div>
        </div>
        <div className="col-8 md:col-6 sm:col-12 text-center ml-6">
          <h2>Resumen de aportes: $ {dataProfile?.totalAmount}</h2>
          <DataTable
            value={resumeContributions}
            tableStyle={{ minWidth: "10rem" }}
            rowsPerPageOptions={
              resumeContributions.length > 5 ? [5, 10, 20] : []
            }
            paginator={resumeContributions.length > 5}
            rows={5}
          >
            <Column field="amount" header="Monto" />
            <Column field="date" header="Fecha" />
            <Column field="description" header="Descripción" />
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;
