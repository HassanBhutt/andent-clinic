import image from "../assets/Scrolling Hero Image (1).png";

function Content() {
  return (
    <div className="container mb-5 my-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-7  ">
          <div
            className="mb-2 my-4 "
            style={{
              color: "#6DA7A2",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "30px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            WELCOME TO ANDENT
          </div>
          <div
            className="mb-2"
            style={{
              color: "#4E4E50",
              fontWeight: 700,
              fontSize: "65px",
              lineHeight: "70px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Discover Premium Dental Treatments &{" "}
            <span
              style={{
                color: "#F9665E",
                fontWeight: 700,
                fontSize: "80px",
                lineHeight: "70px",
              }}
            >
              Save Up to 70%
            </span>
          </div>
          <div
            className="mb-3"
            style={{
              color: "#000000",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            We are devoted to delivering remarkable results for all of our
            orthodontic
            <br />
            treatments. Take the first step towards your dream smile with our
            personalized
            <br />
            care.
          </div>

          <form>
            <div className="row justify-content">
              <div className="col-lg-4 col-md-4">
                <input
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    width: "188px",
                    height: "56px",
                    borderRadius: "15px",
                    color: "#000000",
                  }}
                  className="input-box form-control mb-3"
                  placeholder="Your Phone Number..."
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <input
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    width: "170px",
                    height: "56px",
                    borderRadius: "15px",
                    color: "#000000",
                  }}
                  className="input-box form-control mb-3"
                  placeholder="Your Name..."
                />
              </div>

              <div className="col-lg-4 col-md-4">
                <a
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    width: "170px",
                    height: "56px",
                    borderRadius: "10px",
                    color: "#FFFFFF",
                    backgroundColor: "#F9665E",
                    border: "none",
                  }}
                  className="btn btn-primary"
                  href="#"
                  role="button"
                >
                  GET CALL BACK
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="col lg-4 md-6">
          <img
            src={image}
            alt="Box"
            style={{
              width: "445px",
              height: "394px",
              left: "33px",
              position: "relative",
              top: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
