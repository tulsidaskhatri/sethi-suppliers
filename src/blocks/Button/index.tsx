import React, {MouseEventHandler, useRef} from 'react';
import {useRipple} from 'react-use-ripple';
import {ComponentBaseProps} from '../../types';
import './styles.scss';

type Variant = 'contained' | 'outlined';
type Color = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends ComponentBaseProps {
    content: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    variant?: Variant;
    color?: Color;
}

export const Button = ({
    content,
    onClick,
    variant = 'contained',
    color = 'primary',
    id,
    className,
    style,
}: ButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    useRipple(ref);

    const classes = `Button__${variant} Button__${variant}_${color}${className ? ` ${className}` : ''}`;
    return (
        <button ref={ref} onClick={onClick} id={id} className={classes} style={style}>
            {content}
        </button>
    );
};
