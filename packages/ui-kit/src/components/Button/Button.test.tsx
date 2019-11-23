import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Button } from './Button';
import 'jest-styled-components';

describe('Given a Button component', () => {
    it('should render the text based on the given parameter', () => {
        const button = shallow(<Button label="Test" action={(): void => {}} />);

        // Interaction demo
        expect(button.text()).toEqual('Test');
    });

    it('should have the right style', () => {
        const button = mount(<Button label="Test" action={(): void => {}} />);

        expect(button).toHaveStyleRule('padding', '10px');
    });
});
