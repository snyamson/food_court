const Contact = () => {
  return (
    <>
      <section className="ftco-section contact-section">
        <div className="container mt-5">
          <div className="row block-9">
            <div className="col-md-4 contact-info ">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <h2 className="h4">Contact Information</h2>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Address:</span> John Teye, Opposite White House, Near
                    the Block Factory - Accra Ghana
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Phone:</span>
                    <a href="tel://0244280385"> + 233 2442 803 85</a>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Email:</span>
                    <a href="mailto:info@prsicyfoodcourt.com">
                      {" "}
                      info@prsicyfoodcourt.com
                    </a>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Website:</span> <a href="#">prsicyfoodcourt.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 ">
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
