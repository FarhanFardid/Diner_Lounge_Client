import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import { FaUsers } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { GiWallet } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import useMenu from "../../../Hooks/useMenu";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [menu] = useMenu();

  const pizzas = menu.filter((food) => food.category === "pizza");
  // console.log(pizzas);
  const soups = menu.filter((food) => food.category === "soup");
  // console.log(soups);
  const desserts = menu.filter((food) => food.category === "dessert");
  // console.log(desserts);
  const salads = menu.filter((food) => food.category === "salad");
  // console.log(salads);
  const specials = menu.filter(
    (food) => food.category === "offered" || food.category === "popular"
  );
  const menuData = [
    {
      name: "Pizza",
      count: pizzas.length,
    },
    {
      name: "Soup",
      count: soups.length,
    },
    {
      name: "Dessert",
      count: desserts.length,
    },
    {
      name: "Salad",
      count: salads.length,
    },
    {
      name: "Specials",
      count: specials.length,
    },
  ];

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  // console.log(stats);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", 'black'];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="text-center">
      <Helmet>
        <title>Diner Lounge | Admin Dashboard Home</title>
      </Helmet>

      <SectionTitle
        heading={`Welcome Back ${user ? user.displayName : " "}`}
        subHeading="Admin Dashboard "
      ></SectionTitle>
      <div className="stats shadow grid grid-cols-4 m-6 mt-8">
        <div className="stat  text-center space-y-2 w-full bg-gradient-to-r bg-pink-200 ">
          <div className="stat-title mx-auto text-black">
            <GrRestaurant className="w-10 h-10"></GrRestaurant>
          </div>
          <div className="stat-value text-purple-800">{stats.products}</div>
          <div className="stat-title text-lg font-bold text-cyan-800">
            Menu Items
          </div>
        </div>
        <div className="stat  text-center space-y-2 bg-cyan-200">
          <div className="stat-title mx-auto text-black">
            <FaUsers className="w-10 h-10"></FaUsers>
          </div>
          <div className="stat-value text-blue-800">{stats.users}</div>
          <div className="stat-title text-lg font-bold text-orange-800">
            Customers
          </div>
        </div>
        <div className="stat  text-center space-y-2 bg-purple-200">
          <div className="stat-title mx-auto text-black">
            <TbTruckDelivery className="w-10 h-10"></TbTruckDelivery>
          </div>
          <div className="stat-value text-orange-800">{stats.orders}</div>
          <div className="stat-title text-lg font-bold text-blue-800">
            Orders
          </div>
        </div>
        <div className="stat  text-center space-y-2 bg-blue-200">
          <div className="stat-title mx-auto text-black">
            <GiWallet className="w-10 h-10"></GiWallet>
          </div>
          <div className="stat-value text-cyan-800">$ {stats.revenue}</div>
          <div className="stat-title text-lg font-bold text-purple-800">
            Revenues
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-center p-2">
          Menu item Category wise Distribution
        </h3>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-7">
            {" "}
            <BarChart
              className="mx-auto m-3"
              width={600}
              height={550}
              data={menuData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="count"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {menuData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <div className="col-span-5">
            {" "}
            
              <PieChart width={400} height={400}>
                <Legend></Legend>
                <Pie
                  data={menuData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {menuData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
