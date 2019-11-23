import * as React from 'react';
import { Button } from 'ui-kit';

class App extends React.Component {
    render() {
        return (
            <div className="App1">
                Welcome to micro-app!{' '}
                <Button
                    label="From UI-Kit"
                    action={(): void => console.log('test')}
                ></Button>
            </div>
        );
    }
}

export default App;
