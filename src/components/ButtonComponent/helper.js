export const getClassNameByVariant = (variant, disable) => {
  if (!variant) {
    return "contained-button";
  }
  let className = "";
  switch (variant) {
    case "text":
      className = disable ? "text-disabled-button" : "text-button";
      break;
    case "outlined":
      className = disable ? "outlined-disabled-button" : "outlined-button";
      break;
    default:
      className = disable ? "contained-disable-button" : "contained-button";
  }
  return className;
};
