import { DataTable } from "primereact/datatable";
import { personalProfileAdapter } from "./adapters/personalProfile.adapter";
import { useEffect, useState } from "react";
import {
  Contributions,
  ResumeDataProfile,
} from "../../models/personal-profile.model";
import {
  contributionsGenerated,
  userDataProfile,
} from "../../utilities/baseEnviroment";
import { Column } from "primereact/column";
import logoServos from "../../assets/logo_servos.jpg";
import { Image } from "primereact/image";
import { Divider } from "primereact/divider";
function CardTransferred(): JSX.Element {
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
    <div className="grid background-dark">
      <div className="background-box">
        <h1 className="text-center col-12 md:col-8 sm:col-12 ml-3 ">
          Centro Espiritual Imandade Servos De Jesús
        </h1>
        <div className="grid">
          <div className="col-6 ml-6 sm:col-12 md:col-8">
            <h2>Membresía VIP empleados</h2>
            <p className="text-justify">
              Este fondo se hizo con el fin de poder brindarle a nuestros
              Maestros la posibilidad de generar ahorros significativos, los
              cuales pueden ceder en cualquier momento a un familiar o a quien
              crean pertinente
            </p>
            <p>
              El monto total para poder desembolsarse debe ser de{" "}
              {dataProfile?.totalAmountTransferred} dólares que es monto del
              ahorro programado
            </p>
          </div>
          <div className="col-3 ml-6 sm:col-12 md:col-2 mr-6">
            <Image src={logoServos} alt="Image" width="150" />
          </div>
        </div>
        <Divider layout="horizontal"></Divider>
        <div className="col-12 grid ml-8">
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
                <strong>Sedido a: </strong>
                {dataProfile?.transferred}
              </p>
              <p>
                <strong>Id: </strong>
                {dataProfile?.idTransferred}
              </p>
              <p>
                <strong>Dirección: </strong>
                {dataProfile?.accountTransferred}
              </p>
              <p>
                <strong>Cuenta: </strong>
                {dataProfile?.accountTransferred}
              </p>
              <p>
                <strong>Banco: </strong>
                {dataProfile?.bankTransferred}
              </p>
            </div>
          </div>
          <div className="col-8 md:col-6 sm:col-12 text-center ml-6">
            <h2>Resumen de aportes: $ {dataProfile?.totalAmount}</h2>
            <DataTable
              value={personalProfileAdapter(resumeContributions)}
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
    </div>
  );
}

export default CardTransferred;
