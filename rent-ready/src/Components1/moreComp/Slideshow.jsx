import "./css/Slideshow.css";

const items = [
  "Jean (67)",
  "T-shirt (67)",
  "Skirt (42)",
  "Saree (21)",
  "Jacket (23)",
];

function Slideshow() {
  // repeat items enough times
  const repeatedItems = Array.from({ length: 4 }, () => items).flat();

  return (
    <div className="root2">
      <div className="slideshow">
        {repeatedItems.map((text, i) => (
          <div key={i} className="item">
            {text}
          </div>
        ))}
      </div>

      <div className="slideshow" aria-hidden>
        {repeatedItems.map((text, i) => (
          <div key={i} className="item">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
