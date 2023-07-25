function test() {
  return (
    <div className="container">
      {/*  <div className="d-flex flex-column align-items-center">
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
          See What Others Have to Say
        </div>
        </div> */}
      <div className="row justify-content-center ">
        <div
          className="col-md-6 col-xl-10"
          style={{
            color: "#4E4E50",
            fontSize: "60px",
            fontWeight: 700,
            lineHeight: "72px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          See What Others Have to Say
        </div>
      </div>
      <div className="row">
        <div className="col">
          <iframe src="https://cdn.trustindex.io/amp-widget.html#492565312cf460514b764dc37a2"></iframe>
        </div>
        <div className="col">
          <script
            async
            custom-element="amp-iframe"
            src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
          ></script>

          <iframe
            src="https://cdn.trustindex.io/amp-widget.html#14a092a12fb16057ce863991d95"
            sandbox="allow-scripts allow-same-origin"
            height="257"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default test;
