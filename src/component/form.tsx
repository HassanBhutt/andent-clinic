import image1 from "../assets/Location.png";
import image2 from "../assets/Call Center.png";

function form() {
  return (
    <form>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-6 col-xl-7 mb-4 my-4"
            style={{
              fontWeight: 700,
              fontSize: "60px",
              lineHeight: "72px",
              fontFamily: "Poppins, sans-serif",
              color: "#4E4E50",
            }}
          >
            Book an Appointment
          </div>
        </div>
        <div className="row g-3 mb-3">
          <div className="col-auto">
            <input
              style={{
                width: "252.9px",
                height: "46px",
                top: "10px",
                left: "40.57px",
                borderRadius: "15px",
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
              }}
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="First Name"
            />
          </div>
          <div className="col-auto">
            <input
              style={{
                width: "252.9px",
                height: "46px",
                top: "10px",
                left: "313.54px",
                borderRadius: "15px",
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
              }}
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="row g-3 mb-3">
          <div className="col-auto">
            <input
              style={{
                width: "252.9px",
                height: "47px",
                top: "72px",
                left: "40.57px",
                borderRadius: "15px",
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
              }}
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="Email"
            />
          </div>
          <div className="col-auto">
            <input
              style={{
                width: "252.9px",
                height: "46px",
                top: "10px",
                left: "313.54px",
                borderRadius: "15px",
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
              }}
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="row g-3 mb-3 ">
          <div className="col-auto">
            <input
              style={{
                width: "525.87px",
                height: "93px",
                top: "135px",
                left: "40.57px",
                borderRadius: "15px",
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
              }}
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Message"
            />
          </div>
        </div>
        <div className="row g-3 mb-3">
          <div className="col-auto">
            <input
              style={{
                width: "525.87px",
                height: "46px",
                top: "239px",
                left: "40.57px",
                borderRadius: "15px",
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
              }}
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Panoramex"
            />
          </div>
        </div>

        <div className="col-auto align-items-center">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            style={{
              width: "182.95px",
              height: "43.72x",
              backgroundColor: "#F9665E",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "26px",
              border: "none",
            }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </form>
  );
}
export default form;
