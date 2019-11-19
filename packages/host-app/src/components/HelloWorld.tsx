import * as React from 'react';

export interface HelloWorldProps {
    firstName: string;
    lastName: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = (
    props: HelloWorldProps,
) => (
    <h1>
        Hi there from React! Welcome {props.firstName} and {props.lastName}!
        {[1, 2, 3, 8, 6, 5, 4, 3, 3].map(i => (
            <div key={i}>{i}</div>
        ))}
    </h1>
);
