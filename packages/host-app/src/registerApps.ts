import { registerApplication } from 'single-spa';

function prefix(location: Location, ...prefixes: string[]) {
    console.log(location);
    return prefixes.some(
        prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1,
    );
}

export const registerApps = (): void => {
    registerApplication(
        'root',
        () => import('./root.app'),
        () => true,
    );
    registerApplication(
        'micro-app',
        () => import('../../micro-app/src'),
        (location: Location) => prefix(location, 'micro-app'),
    );
};
