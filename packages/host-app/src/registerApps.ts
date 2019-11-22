import { registerApplication } from 'single-spa';

function prefix(location: Location, ...prefixes: string[]): boolean {
    return prefixes.some(
        prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    );
}

export const registerApps = (): void => {
    registerApplication(
        'root',
        () => import('./root.app'),
        () => true
    );
    registerApplication(
        'micro-app',
        () => System.import('http://localhost:8000/micro-app.js'),
        (location: Location) => prefix(location, 'micro-app')
    );
};
