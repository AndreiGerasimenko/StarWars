export const getId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;

  return item?.url.match(idRegExp)[1];
};

export const getRandomPlanetId = () => {
  return Math.ceil(Math.random() * 61);
};
