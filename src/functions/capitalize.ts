type Capitalize = (
  str: string | null | undefined | number
) => string | undefined;
const capitalize: Capitalize = (str) => {
  if (!str) return undefined;

  if (typeof str === 'number') return str.toString();

  return (
    str?.charAt(0)?.toUpperCase() +
    str?.slice(1).toLowerCase()
  );
};

export default capitalize;
