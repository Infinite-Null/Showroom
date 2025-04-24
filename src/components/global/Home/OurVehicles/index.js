"use client";
import { useState } from "react";
import Heading from "../../Heading";
import Tab from "./Tabs/Tab";
import Vehicles from "./Vehicles/Vehicles";



export default function OurVehicles() {
  const tabs = [
    { name: "SCOOTER" },
    { name: "MOTORCYCLE" },
    { name: "MOPEDS" },
    { name: "ELECTRIC" },
  ];

  const types = {
    SCOOTER: [
      {
        name: "Honda Activa 6G",
        image: "https://cdn4.singleinterface.com/files/banner_images/132996/5736_1654843603_TVSJupiter125.png",
        price: 70000,
        topSpeed: 85,
        mileage: 45,
        engine: "109.51 cc",
        transmission: "Manual",
        fuelType: "Petrol",
      },
      {
        name: "TVS Jupiter",
        image: "https://cdn4.singleinterface.com/files/banner_images/132996/9918_1654843603_TVSNtorq.png",
        price: 65000,
        topSpeed: 90,
        mileage: 50,
        engine: "109.7 cc",
        transmission: "Manual",
        fuelType: "Petrol",
      },
      {
        name: "TVS Jupiter 125",
        image: "https://cdn4.singleinterface.com/files/banner_images/132996/3834_1654843604_TVSJupiter.png",
        price: 70000,
        topSpeed: 90,
        mileage: 50,
        engine: "124.8 cc",
        transmission: "Manual",
        fuelType: "Petrol",
      },
    ],
    MOTORCYCLE: [
      {
        name: "Royal Enfield Classic 350",
        image: "https://cdn4.singleinterface.com/files/banner_images/132996/2173_1659525173_tvs1.jpg",
        price: 200000,
        topSpeed: 120,
        mileage: 35,
        engine: "349 cc",
        transmission: "Manual",
        fuelType: "Petrol",
      },
    ],
    MOPEDS: [
      {
        name: "Hero Pleasure Plus",
        image: "https://cdn4.singleinterface.com/files/banner_images/132996/7012_1697447860_RTR3101.png",
        price: 55000,
        topSpeed: 90,
        mileage: 50,
        engine: "110.9 cc",
        transmission: "Automatic",
        fuelType: "Petrol",
      },
      {
        name: "TVS Scooty Pep Plus",
        image: "https://cdn4.singleinterface.com/files/banner_images/132996/6705_1654843607_TVSXL100.png",
        price: 50000,
        topSpeed: 80,
        mileage: 60,
        engine: "87.8 cc",
        transmission: "Automatic",
        fuelType: "Petrol",
      },
    ],
    ELECTRIC: [
      {
        name: "Ather 450X",
        image: "https://cdn4.singleinterface.com/files/banner_images/132996/5241_1707739624_racingred07.png",
        price: 130000,
        topSpeed: 80,
        mileage: 100,
        engine: "Electric",
        transmission: "Automatic",
        fuelType: "Electric",
      },
      {
        name: "Ola S1 Pro",
        image: "https://cdn4.singleinterface.com/files/banner_images/132996/4595_1707739620_iqubes.png",
        price: 140000,
        topSpeed: 115,
        mileage: 100,
        engine: "Electric", 
        transmission: "Automatic",
        fuelType: "Electric",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState({
    name: tabs[0].name,
    index: 0,
  });

  function handleChangeTab(name, index) {
    setActiveTab({ name, index });
  }

  return (
    <section className="py-10">
      <Heading>Our Vehicles</Heading>
      <Tab
        tabs={tabs}
        handleChangeTab={handleChangeTab}
        activeTab={activeTab}
      />

      <Vehicles vechicles={types[activeTab.name]}/>
    </section>
  );
}
