import { createRootRoute, createRoute } from "@tanstack/react-router";
import { RootLayout } from "./components/RootLayout";
import { homePage } from "../views/pages/home/homePage";
import TeamMemberRegistration from "../views/pages/registrations/TeamMemberRegistration";
import TestFormUploads from "../views/pages/home/test/testFormUploads";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: homePage,
});
// const registrationRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/registration",
//   component: TeamMemberRegistration,
// });
const uploadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/upload",
  component: TestFormUploads,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  // registrationRoute,
  uploadsRoute,
]);
