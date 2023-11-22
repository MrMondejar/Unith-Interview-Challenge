import ListView from "./views/ListView";
import DetailView from "./views/DetailedView"

const routes = [
  {
    path: "/",
    component: ListView``
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/layout",
    component: Layout
  }
];

export default routes;