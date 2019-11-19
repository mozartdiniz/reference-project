import { start } from 'single-spa';
import { registerApps } from './registerApps';

registerApps();
start();
