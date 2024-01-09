import diff1 from "../../assets/differential1.png";
import diff2 from "../../assets/differential2.png";
import diff3 from "../../assets/differential3.png";

const Detail = () => {
  return (
    <section
      name="details"
      className="h-screen justify-center items-center flex flex-col gap-y-8 relative z-40 w-full"
    >
      <h3 className="text-4xl text-start lg:text-6xl  lg:text-center font-extrabold text-white">
        What does{" "}
        <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text">
          our CRM
        </span>{" "}
        offer you?
      </h3>
      <section className="w-full flex flex-col lg:flex-row  justify-center items-center gap-y-4 lg:gap-x-24">
        <article>
          <img
            src={diff1}
            className="lg:w-72 lg:h-72 w-20 h-20"
            alt="task 3d"
          />
          <h3 className="text-xl font-medium text-light">Seller Management</h3>
          <p className="text-light/80 w-full lg:w-64">
            Register sellers and observe monthly statistics of their sales.
          </p>
        </article>
        <article>
          <img
            src={diff2}
            className="lg:w-72 lg:h-72 w-20 h-20"
            alt="task 3d"
          />
          <h3 className="text-xl font-medium text-light">
            Inventory Management
          </h3>
          <p className="text-light/80 w-full lg:w-64">
            Add, edit, and control your business stock.
          </p>
        </article>
        <article>
          <img
            src={diff3}
            className="lg:w-72 lg:h-72 w-20 h-20"
            alt="task 3d"
          />
          <h3 className="text-xl font-medium text-light">
            Customer Management
          </h3>
          <p className="text-light/80 w-full lg:w-64">
            Keep track of customers and their purchases.
          </p>
        </article>
      </section>
    </section>
  );
};

export default Detail;
