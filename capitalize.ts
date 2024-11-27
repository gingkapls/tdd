const capitalize = (str: string): string =>
  (str.at(0)?.toUpperCase() ?? "") + str.slice(1).toLocaleLowerCase();

export default capitalize;
