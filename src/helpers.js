const isArray = arr => Array.isArray(arr);

const isObject = obj => !!(!isArray(obj) && typeof obj === 'object' && obj);

export const parseStringifiedJSON = (item, defaultValue) => {
  const parsedDefault = defaultValue === undefined ? item : defaultValue;
  try {
    const parsedItem = JSON.parse(item);
    return isObject(parsedItem) || isArray(parsedItem) ? parsedItem : parsedDefault;
  } catch (e) {
    return parsedDefault;
  }
};
