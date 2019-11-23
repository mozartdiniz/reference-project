import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

const action = (): void => {
    console.log('Button action');
};

stories.add('with text', () => (
    <Button label={text('Label', 'Simple Button')} action={action} />
));
