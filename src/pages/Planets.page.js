import React, { useEffect, useState } from "react";
import { PageLayout } from "./PageLoyout.component";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader.component";
import { List } from "../components/List.component";
import { PlanetInfo } from "../components/PlanetInfo.component";
import { getId } from "../helpers/helpers.functions";

export const PlanetsPage = () => {
  const [planetsList, setPlanetsList] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const { loading, request } = useHttp();
  const { loading: planetIsLoading, request: requestPlanet } = useHttp();
  useEffect(() => {
    request("/planets/").then(({ data }) => {
      setPlanetsList(data);
    });
  }, [request]);

  const onListItemClickHandler = (id) => {
    requestPlanet(`/planets/${id}/`).then(({ data }) =>
      setSelectedPlanet(data)
    );
  };

  const leftColumn = loading ? (
    <Loader />
  ) : (
    <List>
      {planetsList?.results.map((planet) => {
        return (
          <li
            key={planet.name}
            onClick={() => onListItemClickHandler(getId(planet))}
          >
            {planet.name}
          </li>
        );
      })}
    </List>
  );

  const rightColumn = planetIsLoading ? (
    <Loader />
  ) : !selectedPlanet ? (
    "Choose the planet from the list."
  ) : (
    <PlanetInfo
      isSecondary
      id={getId(selectedPlanet)}
      name={selectedPlanet.name}
      population={selectedPlanet.population}
      rotation_period={selectedPlanet.rotation_period}
      diameter={selectedPlanet.diameter}
    />
  );

  return (
    <PageLayout
      header={<h1>Planets</h1>}
      leftColumn={leftColumn}
      rightColumn={rightColumn}
    />
  );
};
