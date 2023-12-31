import { RiEdit2Line } from "react-icons/ri";
import PersonalInformationView from "../shared/PersonalInformationView";
import CompanyInformationView from "./CompanyInformationView";
import HeaderPerfil from "../shared/HeaderPerfil";
import PrincipalInformation from "../shared/PrincipalInformation";
import { useState } from "react";
import { useSelector } from "react-redux";

import FormEditPerfilBoss from "../../components/forms/FormEditPerfilBoss";

const MainPerfilBoss = () => {
  const [view, setView] = useState("personal");
  const user = useSelector((state) => state.auth.User);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-6 px-12 z-20">
      <HeaderPerfil data={user} />
      <section className="grid grid-cols-1 lg:grid-cols-6 ">
        {/* Section Principal Information */}
        <section className=" col-span-2 flex flex-col gap-y-6 items-center lg:items-start mb-6 lg:mb-0">
          <PrincipalInformation data={user} />
          <div className="flex lg:flex-col justify-between w-full lg:gap-y-2 items-start">
            <button
              className={`text-xl hover:text-secondary transition-colors  ${
                view === "personal"
                  ? "text-secondary font-medium"
                  : "text-secondary/70"
              }`}
              onClick={() => setView("personal")}
            >
              Informacion Personal
            </button>
            <button
              className={`text-xl hover:text-secondary transition-colors  ${
                view === "company"
                  ? "text-secondary font-medium"
                  : "text-secondary/70"
              }`}
              onClick={() => setView("company")}
            >
              Informacion de Empresa
            </button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              view === "personal"
                ? "bg-secondary p-3 shadow-secondary/25 hover:bg-secondary/70"
                : "bg-orange-400 p-3 shadow-orange-400/25 hover:bg-orange-400/70"
            } transition-all rounded-full box-content shadow-md`}
          >
            <RiEdit2Line className="text-xl text-base-light" />
          </button>
        </section>
        {/* Contenido Dinamico */}
        {view === "personal" ? (
          <PersonalInformationView data={user} type="boss" />
        ) : (
          <CompanyInformationView data={user} />
        )}
      </section>
      {isOpen && (
        <FormEditPerfilBoss inView={view} onClose={() => setIsOpen(false)} />
      )}
    </section>
  );
};

export default MainPerfilBoss;
