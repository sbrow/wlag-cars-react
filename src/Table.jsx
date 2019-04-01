import React from "react";

import {
    // Stats,
    BigBreadcrumbs,
    WidgetGrid,
    JarvisWidget,
} from "./common";

import Datatable from "./common/tables/components/Datatable";

export default class Datatables extends React.Component {
    render() {
        return (
            <WidgetGrid>
                <div className="row">
                    <article className="col-sm-12">
                        <JarvisWidget id="wid-id-0" editbutton={false} color="darken">
                            <header>
                                <span className="widget-icon">
                                    <i className="fa fa-table" />
                                </span>
                                <h2>Standard Data Tables</h2>
                            </header>
                            <div>
                                <div className="widget-body no-padding">
                                    <Datatable
                                        options={{
                                            // ajax: "assets/api/tables/datatables.standard.json",
                                            ajax: {
                                                type: "GET",
                                                // url: "assets/cars.json",
                                                url: "/api/getData",
                                            },
                                            columns: [
                                                { data: "make" },
                                                { data: "model" },
                                                { data: "mileage" },
                                                { data: "price" },
                                                { data: "exterior" },
                                                { data: "interior" },
                                                { data: "vin" },
                                                { data: "seller" },
                                                { data: "link" },
                                            ],
                                        }}
                                        paginationLength={true}
                                        className="table table-striped table-bordered table-hover"
                                        width="100%"
                                    >
                                        <thead>
                                            <tr>
                                                <th data-hide="phone">Make</th>
                                                <th data-class="expand">
                                                    <i className="fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs" />
                                                    Model
                          </th>
                                                <th data-hide="phone">
                                                    <i className="fa fa-fw fa-phone text-muted hidden-md hidden-sm hidden-xs" />
                                                    Mileage
                          </th>
                                                <th>Price</th>
                                                <th data-hide="phone,tablet">
                                                    <i className="fa fa-fw fa-map-marker txt-color-blue hidden-md hidden-sm hidden-xs" />
                                                    Exterior
                          </th>
                                                <th data-hide="phone,tablet">Interior</th>
                                                <th data-hide="phone,tablet">
                                                    <i className="fa fa-fw fa-calendar txt-color-blue hidden-md hidden-sm hidden-xs" />
                                                    VIN
                          </th>
                                                <th>Seller</th>
                                                <th>Link</th>
                                            </tr>
                                        </thead>
                                    </Datatable>
                                </div>
                            </div>
                        </JarvisWidget>
                    </article>
                </div>
            </WidgetGrid>
        );
    }
}
