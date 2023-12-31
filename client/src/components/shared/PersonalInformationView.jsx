import {
  RiMapPinLine,
  RiPhoneLine,
  RiUser3Line,
  RiUser5Line,
  RiPaypalLine,
  RiLockPasswordLine,
} from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL_ORDER = `${process.env.REACT_APP_URL}/create-order`;

const PersonalInformationView = ({ data, type }) => {
  console.log(data);
  const payment = async (e) => {
    e.preventDefault();
    const postData = { id: data.id };
    const response = await axios.post(API_URL_ORDER, postData);
    window.location.href = response.data.links[1].href;
  };
  let account_creation_date = new Date(data.createdAt);
  account_creation_date.setDate(account_creation_date.getDate() + 6);

  return (
    <section
      className={`${
        type === "boss" ? "col-span-4" : "col-span-6"
      } flex flex-col gap-y-6`}
    >
      <header className="flex flex-col gap-y-4">
        <h4 className="text-light font-medium text-2xl lg:text-4xl">
          Informacion Personal
        </h4>
        <p className="text-light/80 text-sm">
          Gestiona tu información personal general, incluye numero de telefono y
          email para que puedas ser contactado
        </p>
      </header>
      <main className="grid grid-cols-2 gap-4">
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-base lg:text-lg font-medium">
              Nombre completo
            </p>
            <RiUser3Line className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 ">{data?.name}</p>
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          {type === "boss" ? (
            <>
              <header className="flex items-center justify-between mb-2">
                <p className="text-light text-base lg:text-lg font-medium">
                  Correo electronico
                </p>
                <RiUser5Line className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
              </header>
              <p className="text-light/80 lg:w-auto w-28 truncate">
                {data?.email}
              </p>
            </>
          ) : (
            <>
              <header className="flex items-center justify-between mb-2">
                <p className="text-light text-base lg:text-lg font-medium">
                  Mi rol
                </p>
                <RiUser5Line className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
              </header>
              <p className="text-light/80 ">Vendedor</p>
            </>
          )}
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-base lg:text-lg font-medium">
              Direccion
            </p>
            <RiMapPinLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 ">{data?.address}</p>
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md">
          <header className="flex items-center justify-between mb-2">
            <p className="text-light text-base lg:text-lg font-medium">
              Telefono
            </p>
            <RiPhoneLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
          <p className="text-light/80 ">{data?.phone}</p>
        </article>
        <article className="bg-base-light/30 py-4 px-4 shadow-md rounded-md border-b border-secondary">
          <header className="flex items-center justify-between mb-2">
            <Link
              to={`/changepass/${data.role}/${data.id}`}
              className=" flex justify-between items-center mb-2 hover:scale-[1.03] transition-transform cursor-pointer"
            >
              <p className="text-light text-base lg:text-lg font-medium ">
                Modificar contraseña
              </p>
            </Link>

            <RiLockPasswordLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
          </header>
        </article>
        {type === "boss" && (
          <article
            className="bg-base-light/30 py-4 px-4 shadow-md rounded-md hover:scale-[1.03] transition-transform cursor-pointer border-b border-secondary"
            onClick={payment}
          >
            <header className="flex items-center justify-between mb-2">
              <p className="text-light text-base lg:text-lg font-medium">
                Matodo de pago
              </p>
              <RiPaypalLine className="text-secondary text-xl border-2 border-secondary p-1 box-content rounded-full" />
            </header>
            <button className="text-light hover:text-white ">Paypal</button>
          </article>
        )}
      </main>
    </section>
  );
};

export default PersonalInformationView;
