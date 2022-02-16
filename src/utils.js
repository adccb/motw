export const mergeObjects = (base, expansion) =>
  Object.entries(expansion).reduce((object, [k, v]) => {
    if (Array.isArray(object)) return object.concat(v);
    else if (typeof object[k] === "object")
      return { ...object, [k]: mergeObjects(object[k], v) };
    else return { ...object, [k]: v };
  }, base);
