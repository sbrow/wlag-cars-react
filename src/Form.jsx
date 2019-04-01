import { post } from "axios";
import jQuery from "jquery";
import React from "react";
import { Redirect } from "react-router-dom";

import { JarvisWidget, WidgetGrid } from "./common";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let state = this.state;
    state[event.target.id] = event.target.value;
    this.setState(state);
  }

  renderRedirect = () => {
    if (!window.location.href.match(/password=.*/)) {
      return <Redirect to="/login" />;
    }
  }

  onClick(event) {
    const car = this.state;
    if (jQuery.isEmptyObject(car)) {
      window.alert("Please fill out the fields before submitting");
      return;
    }
    post("/api/putData", car)
      .then((res) => { console.log(res); })
      .catch((err) => { console.error(err); });

    this.setState({ make: "" });
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <WidgetGrid>
          {/* START ROW */}
          <div className="row">
            {/* NEW COL START */}
            <article className="col-sm-12 col-md-12 col-lg-12">
              {/* Widget ID (each widget will need unique ID)*/}
              <JarvisWidget
                id="wid-id-0"
                colorbutton={false}
                editbutton={false}
                custombutton={false}
              >
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-edit" />
                  </span>

                  <h2>Form Grid </h2>
                </header>

                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body no-padding">
                    <form className="smart-form">
                      <header>Insert record</header>

                      <fieldset>
                        <div className="row">
                          <section className="col col-2">
                            <label className="input">
                              Make
                            <input id="make" type="text" placeholder="FORD" value={this.state.make} onChange={this.handleChange} />
                            </label>
                          </section>
                          <section className="col col-2">
                            <label className="input">
                              Model
                            <input id="model" type="text" placeholder="F-150" value={this.state.model} onChange={this.handleChange} />
                            </label>
                          </section>
                          <section className="col col-2">
                            <label className="input">
                              Mileage
                            <input id="mileage" type="number" placeholder="250,000" value={this.state.mileage} onChange={this.handleChange} />
                            </label>
                          </section>
                          <section className="col col-2">
                            <label className="input">
                              Price
                            <input id="price" type="number" placeholder="$15,000" value={this.state.price} onChange={this.handleChange} />
                            </label>
                          </section>
                          <section className="col col-2">
                            <label className="input">
                              Exterior
                            <input id="exterior" type="text" placeholder="Gray" value={this.state.exterior} onChange={this.handleChange} />
                            </label>
                          </section>
                          <section className="col col-2">
                            <label className="input">
                              Interior
                            <input id="interior" type="text" placeholder="Black" value={this.state.interior} onChange={this.handleChange} />
                            </label>
                          </section>
                          <section className="col col-3">
                            <label className="input">
                              VIN
                            <input id="vin" type="text" placeholder="1C4HJXDG8JW275372" value={this.state.vin} onChange={this.handleChange} />
                            </label>
                          </section>
                          <section className="col col-3">
                            <label className="input">
                              Seller
                            <input id="seller" type="text" placeholder="Seller" value={this.state.seller} onChange={this.handleChange} />
                            </label>
                          </section>
                          <section className="col col-3">
                            <label className="input">
                              Link
                            <input id="link" type="text" placeholder="link" value={this.state.link} onChange={this.handleChange} />
                            </label>
                          </section>
                        </div>
                      </fieldset>
                      <footer>
                        <button type="button" className="btn btn-primary" onClick={this.onClick}>
                          Submit
                        </button>
                      </footer>
                    </form>
                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>
              {/* end widget */}
            </article>
            {/* END COL */}

            {/* NEW COL START */}
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
