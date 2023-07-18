import image from "../assets/callcalling.png";
import image1 from "../assets/mail (1).png";
import image2 from "../assets/instagram.png";
import image3 from "../assets/facebook.png";
import image4 from "../assets/image 105.png";
function Header() {
  return (
    <header
      style={{
        backgroundColor: "#6DA7A2",
        display: "flex",
        alignItems: "center",
        padding: "12px 5%",

        gap: "620px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src={image}
            style={{
              width: "24px",
              height: "24px",
            }}
            alt="callCalling"
          />
        </div>
        <div
          style={{
            height: "20px",
            width: "167px",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "20px",
            fontFamily: "Poppins, sans-serif",
            color: "#FFFFFF",
            marginLeft: "10px",
          }}
        >
          +355(0) 69 375 5065
        </div>
        <div
          style={{
            width: "178px",
            height: "24px",
            gap: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={image1}
              style={{
                width: "24px",
                height: "24px",
                marginLeft: "20px",
              }}
              alt="email"
            />
          </div>
          <div
            style={{
              width: "144px",
              height: "20px",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
              fontFamily: "Poppins, sans-serif",
              color: "#FFFFFF",
            }}
          >
            info@andent.com
          </div>
        </div>
      </div>
      <div
        style={{
          width: "175px",
          height: "50px",
          padding: "5px 0px 5px 0px",
          gap: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
          }}
        >
          <img
            src={image2}
            style={{
              width: "33.33px",
              height: "33.33px",
              top: "3.33px",
              bottom: "3.33px",
            }}
            alt="instagram"
          />
        </div>

        <div
          style={{
            width: "40px",
            height: "40px",
          }}
        >
          <img
            src={image3}
            style={{
              width: "33.33px",
              height: "33.33px",
              top: "3.33px",
              bottom: "3.33px",
            }}
            alt="facebook"
          />
        </div>
        <div
          style={{
            width: "35px",
            height: "35px",
          }}
        >
          <img
            src={image4}
            style={{
              mixBlendMode: "color-dodge",
            }}
            alt="TikTock"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
