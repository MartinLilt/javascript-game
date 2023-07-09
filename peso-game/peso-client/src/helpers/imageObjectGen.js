export const imageObjectGen = (image) => {
    const newImageObject = new Image();
    newImageObject.src = image;
    return newImageObject;
}