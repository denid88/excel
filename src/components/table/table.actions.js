export function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    leftMin: box.left,
    leftMax: box.left + box.width
  };
}
