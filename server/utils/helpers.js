export const stringIsEmptyOrWhiteSpace = (strings) => {
  try {
    return strings.some((str) => !str || !str.trim());
  } catch {
    return false;
  }
};

export const isFalsy = (values) => {
  try {
    return values.some((value) => !value);
  } catch {
    return false;
  }
};

export const moveToFirst = (list, item) => {
  if (!list.includes(item)) return [item, ...list];
  const removedItemList = list.filter((i) => i !== item);
  return [item, ...removedItemList];
};
