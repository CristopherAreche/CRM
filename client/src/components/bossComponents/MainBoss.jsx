import { useDispatch, useSelector } from "react-redux";
import TotalSalesChart from "../charts/TotalSalesChart";
import InventoryChart from "../charts/InventoryChart";
import MonthlyCompareChart from "../charts/MonthlyCompareChart";
import BestSeller from "./BestSeller";
import { useEffect } from "react";
import { getBoss } from "../../app/features/bossSlice";
import { RiAlignVertically, RiNumbersLine } from "react-icons/ri";

const MainBoss = () => {
  const dashboard = useSelector((state) => state.boss.bossDashboard);
  const User = useSelector((state) => state.auth.User);
  const dispatch = useDispatch();

  useEffect(() => {
    if (User?.id) dispatch(getBoss(User.id));
  }, [User.id, dispatch]);

  const todayFormated = () => {
    const dateToday = new Date();

    const nameMounth = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = dateToday.getDate();
    const mounth = nameMounth[dateToday.getMonth()];
    const year = dateToday.getFullYear();

    return `Hoy, ${day} ${mounth} ${year}`;
  };

  return (
    <section className="py-6 px-12 z-20 grid gird-cols-1 lg:grid-cols-6 ">
      <section className="col-span-4 flex flex-col gap-y-6 lg:pr-6 pr-0 mb-4 lg:mb-0">
        <section className="flex flex-col gap-y-3.5">
          <h2 className="text-3xl font-medium text-light">
            Welcome Back,{" "}
            <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text font-bold">
              {User?.name}
            </span>
          </h2>
          <p className="text-light/80 text-sm">{todayFormated()}</p>
          <p className="text-sm text-light/90">
            Here&apos;s your summary of the day
          </p>
        </section>
        <section className="bg-base-light/30 px-2 py-4 rounded-md">
          <h5 className="text-light font-bold mb-4 text-xl flex gap-x-2 items-center uppercase">
            Total Sales <RiNumbersLine />
          </h5>
          <TotalSalesChart annual_sales={dashboard?.annual_sales} />
        </section>
        <section className="bg-base-light/30 px-2 py-4 rounded-md">
          <h5 className="text-light text-xl font-bold mb-4 flex gap-x-2 items-center uppercase">
            Monthly Sales <RiAlignVertically />
          </h5>
          <MonthlyCompareChart annual_sales={dashboard?.annual_sales} />
        </section>
      </section>
      <section className="col-span-2 w-full flex flex-col gap-y-7 justify-center mb-10">
        <BestSeller best_salesman={dashboard?.best_salesman} />
        <section className="flex flex-col items-center gap-y-4 bg-base-light/30 py-4 rounded-md shadow-md">
          <h5 className="text-light uppercase font-bold text-xl">
            10 Products with Low Stock
          </h5>
          <InventoryChart />
        </section>
      </section>
    </section>
  );
};

export default MainBoss;
