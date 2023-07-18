import image from "../assets/Rectangle 411.png";
function Team() {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <div
          className="p-2"
          style={{
            color: "#4E4E50",
            fontSize: "60px",
            fontWeight: 700,
            lineHeight: "72px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Meet Our Team
        </div>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column align-items-center">
            <div className="p-2">
              <img
                style={{ width: "321px", height: "195px" }}
                className="image-fluid"
                src={image}
                alt="image"
              />
            </div>
            <div
              className="p-2"
              style={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "21.6px",
                fontFamily: "Poppins,sans-serif",
                color: "#000000",
              }}
            >
              Laurent Bixheku
            </div>
            <div
              className="p-1"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                fontFamily: "Poppins,sans-serif",
                color: "#6DA7A2",
              }}
            >
              Dentistry
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column align-items-center ">
            <div className="p-2">
              <img
                style={{ width: "321px", height: "195px" }}
                className="image-fluid"
                src={image}
                alt="image"
              />
            </div>
            <div
              className="p-2"
              style={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "21.6px",
                fontFamily: "Poppins,sans-serif",
                color: "#000000",
              }}
            >
              Leonard Maci
            </div>
            <div
              className="p-1"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                fontFamily: "Poppins,sans-serif",
                color: "#6DA7A2",
              }}
            >
              Dental Tourism Clinic coordinator
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column align-items-center ">
            <div className="p-2">
              <img
                style={{ width: "321px", height: "195px" }}
                className="image-fluid"
                src={image}
                alt="image"
              />
            </div>
            <div
              className="p-2"
              style={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "21.6px",
                fontFamily: "Poppins,sans-serif",
                color: "#000000",
              }}
            >
              Manuela Manjani
            </div>
            <div
              className="p-1"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                fontFamily: "Poppins,sans-serif",
                color: "#6DA7A2",
              }}
            >
              Dentistry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
