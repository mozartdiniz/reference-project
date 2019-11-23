import React, { FC } from 'react';

interface ButtonProps {
    label: string;
    action: () => void;
}

export const Button: FC<ButtonProps> = ({ label, action }) => (
    <button onClick={action}>{label}</button>
);
