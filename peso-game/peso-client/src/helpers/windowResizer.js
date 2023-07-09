export function windowResizer() {
    const canvas = document.getElementsByTagName('canvas')[0];
  
    const windowResizerAction = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  
    const addWindowResizerListener = () => {
      window.addEventListener('resize', windowResizerAction);
    };
  
    const removeWindowResizerListener = () => {
      window.removeEventListener('resize', windowResizerAction);
    };
  
    // Call the addWindowResizerListener function when the component is mounted or needed
    addWindowResizerListener();
  
    // Return a cleanup function to remove the event listener when the component is unmounted or no longer needed
    return removeWindowResizerListener;
  }
  