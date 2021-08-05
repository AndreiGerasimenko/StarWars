import React, { useEffect, useState } from "react";
import { PageLayout } from "./PageLoyout.component";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader.component";
import { List } from "../components/List.component";
import { PersonInfo } from "../components/PersonInfo.component";
import { getId } from "../helpers/helpers.functions";

export const PeoplePage = () => {
  const [peopleList, setPeopleList] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const { loading, request } = useHttp();
  const { loading: personIsLoading, request: requestPerson } = useHttp();
  useEffect(() => {
    request("/people/").then(({ data }) => {
      setPeopleList(data);
    });
  }, [request]);

  const onListItemClickHandler = (id) => {
    requestPerson(`/people/${id}/`).then(({ data }) => setSelectedPerson(data));
  };

  const leftColumn = loading ? (
    <Loader />
  ) : (
    <List>
      {peopleList?.results.map((person) => {
        return (
          <li
            key={person.name}
            onClick={() => onListItemClickHandler(getId(person))}
          >
            {person.name}
          </li>
        );
      })}
    </List>
  );

  const rightColumn = personIsLoading ? (
    <Loader />
  ) : !selectedPerson ? (
    "Choose the person from the list."
  ) : (
    <PersonInfo
      name={selectedPerson.name}
      gender={selectedPerson.gender}
      birth_year={selectedPerson.birth_year}
      eye_color={selectedPerson.eye_color}
    />
  );

  return (
    <PageLayout
      header={<h1>People</h1>}
      leftColumn={leftColumn}
      rightColumn={rightColumn}
    />
  );
};
