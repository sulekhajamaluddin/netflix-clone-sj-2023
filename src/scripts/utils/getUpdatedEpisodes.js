export default function getUpdatedEpisodes(form, episodes) {
  const updatedItem = form;
  const clonedItems = [...episodes];
  const itemIndex = clonedItems.findIndex((item) => item.id === updatedItem.id);
  clonedItems[itemIndex] = updatedItem;
  return clonedItems;
}
