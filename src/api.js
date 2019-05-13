const items = [];

export const getItems = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(items), 100);
});
export const putItem = item => new Promise((resolve, reject) => {
  items.push(item);
  setTimeout(() => resolve('Done'), 500);
});

export const deleteItem = itemPosition => new Promise((resolve, reject) => {
  items.splice(itemPosition, 1)
  setTimeout(() => resolve('Done'), 100);
});

export const editItem = (itemPosition, itemValue) => new Promise((resolve, reject) => {
  items[itemPosition] = itemValue;
  setTimeout(() => resolve('Done'), 100);
});