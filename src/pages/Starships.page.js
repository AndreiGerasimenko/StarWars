import React, { useEffect, useState } from "react";
import { PageLayout } from "./PageLoyout.component";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader.component";
import { List } from "../components/List.component";
import { getId } from "../helpers/helpers.functions";
import { ShipInfo } from "../components/ShipInfo.component";

export const StarshipPage = () => {
  const [shipsList, setShipsList] = useState(null);
  const [selectedShip, setSelectedShip] = useState(null);
  const { loading, request } = useHttp();
  const { loading: shipIsLoading, request: requestShip } = useHttp();

  useEffect(() => {
    request("/starships/").then(({ data }) => {
      setShipsList(data);
    });
  }, [request]);

  const onListItemClickHandler = (id) => {
    requestShip(`/starships/${id}/`).then(({ data }) => setSelectedShip(data));
  };

  const leftColumn =
    loading || shipIsLoading ? (
      <Loader />
    ) : !selectedShip ? (
      <List>
        {shipsList?.results.map((ship) => {
          return (
            <li
              key={ship.name}
              onClick={() => onListItemClickHandler(getId(ship))}
            >
              {ship.name}
            </li>
          );
        })}
      </List>
    ) : (
      <ShipInfo
        name={selectedShip.name}
        model={selectedShip.model}
        cost_in_credits={selectedShip.cost_in_credits}
        length={selectedShip.length}
        passengers={selectedShip.passengers}
        onClickBackButton={() => setSelectedShip(null)}
      />
    );

  return <PageLayout header={<h1>Starships</h1>} leftColumn={leftColumn} />;
};
