/* eslint-disable consistent-return */

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
// eslint-disable-next-line import/extensions
import { fetcher } from "@/utils/axios";
// import { use } from 'passport';

// Create a Context
const DataContext = createContext();

// Create a Provider
export function DataProvider({ children }) {
  const [productData, setData] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [electronic, setElectronics] = useState([]);
  const [footwear, setFootwear] = useState([]);
  const [watches, setWatches] = useState([]);
  const [allProducts, setProductsAll] = useState([]);
  const [machines, setMachines] = useState([]);

  const getMachines = useCallback(async () => {
    try {
      const res = await fetcher.get("/products/machines");
      if (res.data && res.data.data.length) {
        return res.data.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const getProductsAll = useCallback(async () => {
    try {
      const res = await fetcher.get("/products");
      if (res.data && res.data.data.length) {
        return res.data.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const getWatches = useCallback(async () => {
    try {
      const res = await fetcher.get("/products/watches");
      if (res.data && res.data.data.length) {
        return res.data.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const getFootwear = useCallback(async () => {
    try {
      const res = await fetcher.get("/products/footwear");
      if (res.data && res.data.data.length) {
        return res.data.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const getElectronics = useCallback(async () => {
    try {
      const res = await fetcher.get("/products/electronics");
      if (res.data && res.data.data.length) {
        return res.data.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const getClothes = useCallback(async () => {
    try {
      const res = await fetcher.get("/products/clothes");
      if (res.data && res.data.data.length) {
        return res.data.data;
      }
      return [];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetcher.get("/products/home");

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
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
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
        getFootwear,
        watches,
        setWatches,
        getWatches,
        allProducts,
        setProductsAll,
        getProductsAll,
        machines,
        setMachines,
        getMachines,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

// Custom hook to use the context
export function useData() {
  return useContext(DataContext);
}
