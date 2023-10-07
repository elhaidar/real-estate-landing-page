"use client";

import React from "react";
import { WiHumidity, WiStrongWind, WiCloud } from "react-icons/wi";

const WeatherCard = ({
  showWeather,
  weather,
}: {
  showWeather: boolean;
  weather: any;
}) => {
  return (
    <>
      {!weather && <p>Loading...</p>}
      {weather && (
        <div
          className={`${
            showWeather ? "block" : "hidden"
          } absolute top-4 right-12 lg:right-60 z-10 p-8 rounded-3xl bg-white border-[1px] border-black border-opacity-20 flex flex-col justify-center items-center`}
        >
          <p>{`${weather?.location.region}, ${weather?.location.country}`}</p>
          <div className="flex items-center justify-between w-[300px] py-4">
            <p className="basis-1/3 opacity-50 text-center text-sm px-4">
              {weather?.current.condition.text}
            </p>
            <p className="basis-1/3 text-3xl text-center">
              {`${weather?.current.temp_c}`}&deg;C
            </p>
            <div className="basis-1/3 pl-4">
              <div className="flex items-center gap-2 w-full">
                <WiStrongWind />
                <p className="text-sm">
                  {`${weather?.current.gust_mph}`}{" "}
                  <span className="text-xs">mph</span>
                </p>
              </div>
              <div className="flex items-center gap-2 w-full">
                <WiHumidity />
                <p className="text-sm">
                  {`${weather?.current.humidity}`}
                  <span className="text-xs">%</span>
                </p>
              </div>
              <div className="flex items-center gap-2 w-full">
                <WiCloud />
                <p className="text-sm">{`${weather?.current.cloud}`}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
