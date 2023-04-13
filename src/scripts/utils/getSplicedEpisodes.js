export default function getSplicedEpisodes(id, episodes) {
  const clonedItems = [...episodes];
  const itemIndex = clonedItems.findIndex((item) => item.id === id);
  clonedItems.splice(itemIndex, 1);
  return clonedItems;
}
