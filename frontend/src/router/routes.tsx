export const ROUTES = {
    EXAMPLE: "/",
}

export const buildRoute = (path: string, id: string) =>
    path.replace(":id", id);