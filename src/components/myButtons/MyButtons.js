import React from 'react';
import './MyButtons.css';

const STYLES = [
    'btn--primary', 
    'btn--primary-rev', 
    'btn--primary-rev-arrow',
    'btn--primary-rev-start',
    'btn--red',
    'btn--mobile-menu'
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
    buttonStyle,
    buttonShape,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonShape = SHAPES.includes(buttonShape) ? buttonShape : SHAPES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button
        className={`btn ${checkButtonStyle} ${checkButtonShape} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        style={style}
        title={title}
        >
        {children}
        </button>
    );
};