function handleImageError() {
  // Create an error div element
  const errorDiv = document.createElement("div");

  const styles = {
    position: "fixed",
    right: "50%",
    top: "50%",
    transform: "translateX(50%)",
    color: "red",
  };

  Object.assign(errorDiv.style, styles);

  // Create the first <p> element
  const errorMessage1 = document.createElement("p");
  errorMessage1.textContent = "Error loading tileset image.";

  // Create the second <p> element
  const errorMessage2 = document.createElement("p");
  errorMessage2.textContent = "Please try again later.";

  // Append the <p> elements as children of the error div
  errorDiv.appendChild(errorMessage1);
  errorDiv.appendChild(errorMessage2);

  // Append the error div to the body element
  document.body.appendChild(errorDiv);
}

