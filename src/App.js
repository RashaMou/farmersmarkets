import React, { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import "./App.css";
import PhillyMap from "./components/PhillyMap";
import { Header } from "./components/Header";

function App() {
  useEffect(() => {
    axios({
      method: "post",
      url: "https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/Farmers_Markets/FeatureServer/0/query",
      data: qs.stringify({
        f: "json",
        where: "1=1",
        outSr: "4326",
        outFields: "*",
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
      .then((res) => {
        console.log(res.data.features);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <PhillyMap />
    </>
  );
}

export default App;
