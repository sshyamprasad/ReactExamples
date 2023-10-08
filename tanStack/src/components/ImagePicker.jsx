export default function ImagePicker({ images, selectedImage, onSelect }) {
  console.log(images, selectedImage )
  return (
    <div id="image-picker">
      <p>Select an image</p>
      <ul>
        {/* {images.map((image) => {console.log("Image=" , image.path);return ( */}
          <li
            key={"buzzing-city.jpg"}
            onClick={() => onSelect("buzzing-city.jpg")}
            className={selectedImage === "buzzing-city.jpg" ? 'selected' : undefined}
          >
            <img
              src={`http://localhost:3000/buzzing-city.jpg`}
              alt={"People walking through a city buzzing with life at night."}
            />
          </li>
        {/* )})} */}
      </ul>
    </div>
  );
}
