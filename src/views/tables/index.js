import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const Page = Loadable({
  loader: () => import("../../Page"),
  loading: Loading,
});

const NormalTables = Loadable({
  loader: () => import("./components/NormalTables"),
  loading: Loading,
});

export const routes = [
  {
    path: "/tables/datatables",
    exact: true,
    component: Page,
    name: "Datatables",
  },

  {
    path: "/tables/normal-tables",
    exact: true,
    component: NormalTables,
    name: "NormalTables",
  },
];
