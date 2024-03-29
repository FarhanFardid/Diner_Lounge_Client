import { useQuery } from "@tanstack/react-query";

// import { useEffect, useState } from "react";

const useMenu = () => {
  // const [menu,setMenu] = useState([]);
  // const [loading,setLoading] = useState(true);
  // useEffect(()=>{
  //     fetch('http://localhost:5000/menu')
  //     fetch('https://diner-lounge-server.vercel.app/menu')
  //     .then(res => res.json())
  //     .then (data => {
  //         setMenu(data);
  //         setLoading(false);

  //     })
  // },[])

  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],

    queryFn: async () => {
      // const response = await fetch("http://localhost:5000/menu");
      const response = await fetch("https://diner-lounge-server.vercel.app/menu");
      return response.json();
    },
  });
  return [menu, refetch];
};

export default useMenu;
