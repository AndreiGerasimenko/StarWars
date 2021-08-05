import React, { useEffect, useState, useRef } from "react";
import { getId, getRandomPlanetId } from "../helpers/helpers.functions";
import { useHttp } from "../hooks/http.hook";
import { Loader, PlanetInfo } from "./";

export const PlanetLoader = () => {
  const [planetInfo, setPlanetInfo] = useState(null);
  const timerId = useRef(null);
  const { loading, request } = useHttp();
  useEffect(() => {
    timerId.current = setTimeout(async function getPlanetInfo() {
      const id = getRandomPlanetId();
      const { data } = await request(`/planets/${id}/`);
      setPlanetInfo(data);
      timerId.current = setTimeout(getPlanetInfo, 10000);
    }, 10000);

    return () => {
      clearTimeout(timerId.current);
    };
  }, [request]);

  return (
    <div style={{ minHeight: "14em" }}>
      {loading || !planetInfo ? (
        <Loader />
      ) : (
        <PlanetInfo
          id={getId(planetInfo)}
          name={planetInfo.name}
          population={planetInfo.population}
          rotation_period={planetInfo.rotation_period}
          diameter={planetInfo.diameter}
        />
      )}
    </div>
  );
};
