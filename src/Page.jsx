import React from "react";
import Loadable from "react-loadable";

import { Loading } from "./common/navigation";

const DataTables = Loadable({
    loader: () => import("./Table"),
    loading: Loading,
});

const FormElements = Loadable({
    loader: () => import("./Form"),
    loading: Loading,
});

export default class Page extends React.Component {
    render() {
        return (
            <div id="content">
                <FormElements />
                <DataTables />
            </div>);
    }
}
