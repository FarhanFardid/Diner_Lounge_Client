import { Helmet } from "react-helmet-async";
import CommonBanner from "../../Shared/CommonBanner";
import banner from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import FoodCard from "../../Shared/FoodCard";
// import useMenu from "../../Hooks/useMenu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const OrderFood = () => {
  
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  const categories = ["pizza", "soup", "dessert", "salad", "special"];
  const { category } = useParams();

  let startIndex;
  console.log(category);

  let initialIndex = categories.indexOf(category);

  // console.log(initialIndex);
  if (initialIndex < 0) {
    startIndex = 0;
  } else {
    startIndex = initialIndex;
  }
  // console.log(startIndex)
  const [tabIndex, setTabIndex] = useState(startIndex);
  // useMenu hook used
  // const [menu] = useMenu();

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
  // console.log(specials);
  return (
    <div>
      <Helmet>
        <title>Diner Lounge | Order Food</title>
      </Helmet>
      <CommonBanner
        img={banner}
        size="big"
        content="Order Food Easily at Diner Lounge. Bringing convenience to your fingertips. With just a few taps, you can enjoy a delectable meal from their diverse menu"
        heading="Order Food"
      ></CommonBanner>

      <div className="p-5 m-5">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="font-bold text-lg text-amber-700 text-center">
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Salads</Tab>
            <Tab>Specials</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3 gap-2">
              {pizzas.map((pizza) => (
                <FoodCard
                  key={pizza._id}
                  item={pizza}
                  display="show"
                ></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-2">
              {soups.map((soup) => (
                <FoodCard key={soup._id} item={soup} display="show"></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-2">
              {desserts.map((dessert) => (
                <FoodCard
                  key={dessert._id}
                  item={dessert}
                  display="show"
                ></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-2">
              {salads.map((salad) => (
                <FoodCard
                  key={salad._id}
                  item={salad}
                  display="show"
                ></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-2">
              {specials.map((special) => (
                <FoodCard
                  key={special._id}
                  item={special}
                  display="show"
                ></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
