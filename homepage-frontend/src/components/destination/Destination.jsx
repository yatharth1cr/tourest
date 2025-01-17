import "bootstrap/dist/css/bootstrap.min.css";
import "./destination.css";

const destinations = [
  {
    city: "Malé",
    country: "Maldives",
    img: "../../assets/destination-1.jpg",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    img: "../../assets/destination-2.jpg",
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    img: "../../assets/destination-3.jpg",
  },
  {
    city: "Kathmandu",
    country: "Nepal",
    img: "../../assets/destination-4.jpg",
  },
  {
    city: "Jakarta",
    country: "Indonesia",
    img: "../../assets/destination-5.jpg",
  },
];

const Destination = () => {
  return (
    <section className="destination py-5">
      <div className="container">
        <p className="section-subtitle center">Destinations</p>
        <h2 className="section-title center">Choose Your Place</h2>

        <div className="row gx-3 gy-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`col-md-${index < 2 ? "6" : "4"}`} // First two cards are half-width, others one-third width
            >
              <div className="destination-card w-100 h-100">
                <img
                  src={destination.img}
                  alt={`${destination.city}, ${destination.country}`}
                  className="img-fluid"
                />
                <div className="destination-overlay w-100 h-100"></div>
                <div className="card-content">
                  <p className="card-subtitle">{destination.city}</p>
                  <h3 className="card-title">{destination.country}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
