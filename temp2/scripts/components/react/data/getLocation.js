const getLocation = (pathName) => {
    const routeParts = pathName.split('/');
    const lastRoute = routeParts[routeParts.length - 1];
    let routeLocation = (routeParts ? (lastRoute.split('-')) ? lastRoute.replace('-', ' ') : routeParts : lastRoute);
    return routeLocation;
};

export default getLocation;
