import image from "../assets/Frame 106.png";
import image1 from "../assets/image 122.png";
function Testimonials() {
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        <div
          className="p-2"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            fontSize: "60px",
            lineHeight: "72px",
            color: "#4E4E50",
          }}
        >
          Testimonials
        </div>
      </div>
      <div className="row justify-content-center g-2">
        <div className="col-md-4 col-xl-4 mb-4">
          <div className="d-flex flex-column align-items-center">
            <div className="p-2">Gaetano Lolimitica </div>
            <div className="p-2">
              <img className="image-fluid" src={image1} alt="image" />
            </div>
            <div style={{ width: "400px", height: "160px" }}>
              <div className="p-2">
                Dentures are removable dental appliances that are crafted to
                resemble your natural teeth and gums. They are custom-made to
                fit your unique mouth shape and are designed to restore your
                smile and ability to chew and speak properly. Dentures are made
                from durable materials that are both comfortable and functional.
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-4 mb-4">
          <div className="d-flex flex-column align-items-center  ">
            <div className="p-2">Gaetano Lolimitica</div>
            <div className="p-2">
              <img className="image-fluid" src={image1} alt="image" />
            </div>
            <div style={{ width: "400px", height: "160px" }}>
              <div className="p-2">
                Dentures are removable dental appliances that are crafted to
                resemble your natural teeth and gums. They are custom-made to
                fit your unique mouth shape and are designed to restore your
                smile and ability to chew and speak properly. Dentures are made
                from durable materials that are both comfortable and functional.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
