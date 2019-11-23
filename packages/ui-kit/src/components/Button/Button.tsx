import React, { FC } from 'react';
import { ButtonStyled } from './Button.style';

interface ButtonProps {
    label: string;
    action: () => void;
}

export const Button: FC<ButtonProps> = ({ label, action }) => (
    <ButtonStyled onClick={action}>{label}</ButtonStyled>
);
