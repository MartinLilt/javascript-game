// Define the game map data

const options = [{ array: 0, index: 0, value: 0 }];
const tileSize = 12;
const mapSize = ctx.canvas.width;
const currentMap = MapObject.gameMapChanger(mapSize, tileSize, options);

console.log(currentMap)

function drawMap(mapArray) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing

    const image = new Image();
    
    image.onload = function() {
      ctx.drawImage(image, 0, 0, 1200, 1200);
      drawGrid(mapArray);
    };
    image.src = './assets/images/map.png';
  
    function drawGrid(mapArray) {
      for (let i = 0; i < mapArray.length; i++) {
        const row = mapArray[i];
  
        for (let j = 0; j < row.length; j++) {
          const value = row[j];
  
          // Set the fill style based on the value in the mapArray
          if (value === 0) {
            ctx.fillStyle = 'transparent';
          } else {
            ctx.fillStyle = 'red';
          }
  
          // Draw the tile rectangle with borders
          const x = j * tileSize;
          const y = i * tileSize;
          ctx.fillRect(x, y, tileSize, tileSize);
  
          // Set the border color
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
  
          // Draw the border around the tile
          ctx.strokeRect(x, y, tileSize, tileSize);
        }
      }
    }
  }
  
  // Call the drawMap function with your currentMap array
  drawMap(currentMap);