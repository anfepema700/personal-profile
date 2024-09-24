import { useEffect, useState } from "react";
import logoBifinancing from "../../assets/logo_bifinancing.jpeg";
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
import "./styles/catdWithOutHeader.css";
import { Image } from "primereact/image";
function CardWithoutHeader(): JSX.Element {
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
    <div className="grid background-dark text-white">
      <div className=" background-box grid">
        <div className="grid">
          <div className="col-8 md:col-8 sm:col-12 ml-3">
            <h2>Resumen de cuenta</h2>
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
          <div className="col-4 md:col-4 sm:col-12">
            <Image src={logoBifinancing} alt="Image" width="150" />
          </div>
        </div>
        <div className="col-12">
          <h2>Resumen de aportes: $ {dataProfile?.totalAmount} usd</h2>
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

export default CardWithoutHeader;
