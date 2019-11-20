import * as React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to root app!</h1>
                <div
                    onClick={() => {
                        window.location.assign('/micro-app');
                    }}
                >
                    show micro-app
                </div>
            </div>
        );
    }
}

export default App;
