import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Given a Button component', () => {
    it('should render the text based on the given parameter', () => {
        const button = shallow(<Button label="Test" action={(): void => {}} />);

        // Interaction demo
        expect(button.text()).toEqual('Test');
    });
});
