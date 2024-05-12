"use client";

import { connectToDatabase } from "@/lib/database/mongoose";
import { useEffect, useState } from "react";

export default function Home() {
  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const data = await connectToDatabase();
  //     console.log(data);
  //   };

  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, []);

  return (
    <div>
      <p>Home</p>
    </div>
  );
}

