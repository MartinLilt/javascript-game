
const MapObject = {};

MapObject.gameMapChanger = function (drawObjectSize, tailSize, collisionsData) {
  const value = drawObjectSize / tailSize;
  const defaultMap = Array(value)
    .fill()
    .map(() => Array(value).fill(0));

  if (collisionsData) {
    const filteredOptions = collisionsData.filter(
      (options) => options.array < value
    );

    for (const options of filteredOptions) {
      defaultMap[options.array][options.index] = options.value;
    }
  }

  return defaultMap;
}


