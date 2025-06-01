import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/index.tsx",[
        index("routes/home.tsx"),
        route("wcag", "routes/wcag/wcag.tsx"),
        route("wcag/perceptible", "routes/wcag/perceptible.tsx"),
        route("wcag/operable", "routes/wcag/operable.tsx"),
        route("wcag/comprensible", "routes/wcag/comprensible.tsx"),
        route("wcag/robusto", "routes/wcag/robusto.tsx"),
        route("wcag/2.2", "routes/wcag/wcag2.2.tsx"),
        route("legislacion", "routes/legislacion.tsx"),
        route("componentes", "routes/componentes.tsx"),
        route("herramientas", "routes/herramientas.tsx"),
    ]
)] satisfies RouteConfig;
