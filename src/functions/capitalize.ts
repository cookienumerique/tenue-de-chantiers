type Capitalize = (
  str: string | null | undefined
) => string | undefined;
const capitalize: Capitalize = (str) => {
  if (!str) return undefined;

  return (
    str?.charAt(0)?.toUpperCase() +
    str?.slice(1).toLowerCase()
  );
};

export default capitalize;
