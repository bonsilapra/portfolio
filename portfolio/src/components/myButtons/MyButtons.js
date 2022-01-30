import React from 'react';
import './MyButtons.css';

const STYLES = [
    'btn--primary', 
    'btn--primary-rev', 
    'btn--primary-rev-arrow',
    'btn--next',
    'btn--previous',
    'btn--start',
    'btn--red',
    'btn--mobile-menu',
    'btn--tech'
];

const SHADOW = [
    '', 
    'btn--dark',
    'btn--light',
];

const SHAPES = [
    'btn--square',
    'btn--round', 
    'btn--mobile'
];

const SIZES = [
    'btn--small', 
    'btn--medium', 
    'btn--large',
    'btn--large-mobile'
];

export const MyButton = ({
    children,
    type,
    onClick,
    style,
    title,
    disabled,
    buttonStyle,
    buttonShadow,
    buttonShape,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    
    const checkButtonShadow = SHADOW.includes(buttonShadow)
    ? buttonShadow
    : SHADOW[0];

    const checkButtonShape = SHAPES.includes(buttonShape) ? buttonShape : SHAPES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button
        className={`btn ${checkButtonStyle} ${checkButtonShadow} ${checkButtonShape} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        style={style}
        title={title}
        disabled={disabled}
        >
        {children}
        </button>
    );
};