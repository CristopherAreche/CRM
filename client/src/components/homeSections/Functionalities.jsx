import ellipse from "../../assets/svg/ellipse.svg";
import character from "../../assets/character.png";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Functionalities = () => {
  return (
    <section
      name="features"
      className=" h-[100vh] items-center flex-col w-full lg:flex-row justify-center flex lg:pt-12 lg:px-28 "
    >
      <div className="flex w-full justify-between max-w-[1000px]">
        <div className="flex flex-col gap-y-4 items-start">
          <h3 className="text-3xl lg:text-4xl w-full lg:w-[30rem]   font-extrabold text-white mb-4">
            Features to simplify your management in one place{" "}
          </h3>
          <p className="text-lg font-medium text-gray-200 flex items-center gap-x-4">
            <RiCheckboxCircleFill className="text-secondary text-4xl" />{" "}
            Customer agenda
          </p>
          <p className="text-lg font-medium text-gray-200 flex items-center gap-x-4">
            <RiCheckboxCircleFill className="text-secondary text-4xl" />{" "}
            Automatic calculation of your sales
          </p>
          <p className="text-lg font-medium text-gray-200 flex items-center gap-x-4">
            <RiCheckboxCircleFill className="text-secondary text-4xl" /> Control
            of your sellers and inventory
          </p>
          <p className="text-lg font-medium text-gray-200 flex items-center gap-x-4">
            <RiCheckboxCircleFill className="text-secondary text-4xl" />{" "}
            Promotion system
          </p>
          <p className="text-lg font-medium text-gray-200 flex items-center gap-x-4">
            <RiCheckboxCircleFill className="text-secondary text-4xl" /> Email
            alerts
          </p>
          <Link
            to="/authentication/register"
            className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl text-white font-medium text-lg lg:text-2xl hover:scale-[1.03] transition-all flex gap-x-1 items-center"
          >
            Get Started Now
          </Link>
        </div>

        <div className="relative hidden lg:block">
          <img
            src={ellipse}
            alt="ellipse gradient"
            className="w-[28rem] h-[28rem]"
          />
          <img
            src={character}
            alt="character"
            className="absolute top-0 left-6 object-cover w-[26rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Functionalities;
