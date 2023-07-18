import image from "../assets/new.png";
import image1 from "../assets/Image Container (2).png";
import image2 from "../assets/Image Container (3).png";
import vid from "../assets/7i81tn.mp4";
function app() {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <div
          className="p-2"
          style={{
            color: "#6DA7A2",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "30px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          MAKE THE MOST OUT OF YOUR TRIP
        </div>
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
          Dental Tourism
        </div>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-md-4 mb-4 ">
          <div className="d-flex flex-column align-items-center  ">
            <div className="p-2">
              <img className="image-fluid" src={image} alt="image" />
            </div>
            <div style={{ width: "290px", height: "154px" }}>
              <div
                className="p-2"
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "21.6px",
                  fontFamily: "Poppins,sans-serif",
                  color: "#4E4E50",
                }}
              >
                Free accommodation in a 4-star hotel in the heart of Tirana
              </div>
              <div
                className="p-2"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  fontFamily: "Poppins,sans-serif",
                  color: "#4E4E50",
                }}
              >
                Allowing you to immerse yourself in the vibrant life and
                captivating attractions while receiving top-tier dental
                services.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column align-items-center ">
            <div className="p-2">
              <img className="image-fluid" src={image1} alt="image" />
            </div>
            <div style={{ width: "324px", height: "154px" }}>
              <div
                className="p-2"
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "21.6px",
                  fontFamily: "Poppins,sans-serif",
                  color: "#4E4E50",
                }}
              >
                Assistance with your dental travel experience from start to
                finish
              </div>

              <div
                className="p-2"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  fontFamily: "Poppins,sans-serif",
                  color: "#4E4E50",
                }}
              >
                Services like picking you up and dropping you off from the
                airport, scheduling appointments, reminders, translations, and
                more.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="d-flex flex-column align-items-center ">
            <div className="p-2">
              <img className="image-fluid" src={image2} alt="image" />
            </div>
            <div style={{ width: "290px", height: "154px" }}>
              <div
                className="p-2"
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "21.6px",
                  fontFamily: "Poppins,sans-serif",
                  color: "#4E4E50",
                }}
              >
                Travel tips and tours to make the most of your trip
              </div>
              <div
                className="p-2"
                style={{
                  color: "#4E4E50",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  fontFamily: "Poppins,sans-serif",
                }}
              >
                To ensure you’re getting the most out of your trip, we will
                personalise your journey based on your likes and dislikes.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-md-6 ">
          <video width="100%" controls>
            <source src={vid} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </div>
  );
}

export default app;
