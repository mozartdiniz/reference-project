import * as React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => (
    <div>
        Home Page <Link to="/hello-world">Hello World</Link>
    </div>
);
