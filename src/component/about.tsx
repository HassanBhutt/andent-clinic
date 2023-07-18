import image from "../assets/Frame 71.png";
function About() {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col mb-4">
          <img className="image-fluid" src={image} alt="image" />
        </div>
        <div className="col">
          <div className="row ">
            <p
              style={{
                color: "#6DA7A2",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "30px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              ABOUT US
            </p>
          </div>
          <div className="row ">
            <p
              style={{
                color: "#6DA7A2",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "30px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Why Andent?
            </p>
          </div>
          <div className="row ">
            <p
              style={{
                color: "#000000",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Your Trusted Dental Clinic in Albania. With 10+ years of
              expertise, our renowned dentist Dr. Anduela Çurmaku leads our
              exceptional team. From painless implants to advanced treatments,
              our precision, safety, and top-quality equipment ensure optimal
              oral health. Trust our skilled team for a confident smile. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
