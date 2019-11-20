import * as React from 'react';
import * as ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';

const contentDomElementGetter = (): HTMLElement =>
    document.getElementById('app');

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    domElementGetter: contentDomElementGetter
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
