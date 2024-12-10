"use client";

import { fetcher } from "@/utils/axios";
// import { use } from 'passport';
import { createContext, useCallback, useContext, useEffect, useState } from "react";

// Create a Context
const DataContext = createContext();

// Create a Provider
export function DataProvider({ children }) {
  const [productData, setData] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [electronic, setElectronics] = useState([]) 
  const [footwear, setFootwear] = useState([])

  const getFootwear = useCallback(async () => {
    try {
      const res = await fetcher.get("/footwear");
      if (res.data && res.data.data.length) {
        return(res.data.data);
      } else {
        return([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const getElectronics = useCallback(async () => {
    try {
      const res = await fetcher.get("/electronics");
      if (res.data && res.data.data.length) {
        return(res.data.data);
      } else {
        return([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  

  const getClothes = useCallback(async () => {
    try {
      const res = await fetcher.get("/clothes");
      if (res.data && res.data.data.length) {
        return(res.data.data);
      } else {
        return([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetcher.get("/home");

        
        if (res.data && res.data.data.length) {
          setData(res.data.data.reverse());
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [setData]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataContext.Provider value={{
      productData,
      setData,
      DataProvider,
      clothes,
      setClothes,
      getClothes,
      loading,
      setLoading,
      electronic,
      setElectronics,
      getElectronics,
      footwear,
      setFootwear,
      getFootwear
      }}>
      {children}
    </DataContext.Provider>
  );
}

// Custom hook to use the context
export function useData() {
  return useContext(DataContext);
}
