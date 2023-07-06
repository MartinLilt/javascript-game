// Create a styles object
const styles = {
  margin: "0",
  backgroundColor: "black",
  color: "black",
  overflow: "hidden",
  position: "relative",
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// Merge the styles object with the style property of document.body
Object.assign(document.body.style, styles);
