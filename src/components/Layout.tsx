"use client";

import { setWeather } from "@/redux/slices/weatherSlice";
import { AppDispatch, useAppSelector } from "@/redux/store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const LayoutContainer = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: any;
}) => {
  const { weather } = useAppSelector((state) => state.weather);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    data && dispatch(setWeather(data));
    console.log(data);
  }, [data]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col min-h-screen w-screen items-center">
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
