const Appointment = () => {
  return (
    <>
      <section className="ftco-appointment">
        <div className="overlay"></div>
        <div className="container-wrap">
          <div className="row no-gutters d-md-flex align-items-center">
            <div className="col-md-6 d-flex align-self-stretch">
              <div id="map"></div>
            </div>
            <div className="col-md-6 appointment ">
              <h3 className="mb-3">Book a Table</h3>
              <form action="#" className="appointment-form">
                <div className="d-md-flex">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group ml-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="d-md-flex">
                  <div className="form-group">
                    <div className="input-wrap">
                      <div className="icon">
                        <span className="ion-md-calendar"></span>
                      </div>
                      <input
                        type="text"
                        className="form-control appointment_date"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                  <div className="form-group ml-md-4">
                    <div className="input-wrap">
                      <div className="icon">
                        <span className="ion-ios-clock"></span>
                      </div>
                      <input
                        type="text"
                        className="form-control appointment_time"
                        placeholder="Time"
                      />
                    </div>
                  </div>
                  <div className="form-group ml-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="d-md-flex">
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="2"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group ml-md-4">
                    <input
                      type="submit"
                      value="Appointment"
                      className="btn btn-primary py-3 px-4"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
