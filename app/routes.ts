import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/index.tsx",[
        index("routes/home.tsx"),
        route("wcag", "routes/wcag.tsx"),
        route("legislacion", "routes/legislacion.tsx"),
        route("componentes", "routes/componentes.tsx"),
        route("herramientas", "routes/herramientas.tsx"),
    ]
)] satisfies RouteConfig;
