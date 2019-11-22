import { start } from 'single-spa';
import { registerApps } from './registerApps';
import 'systemjs/dist/system';

registerApps();
start();
