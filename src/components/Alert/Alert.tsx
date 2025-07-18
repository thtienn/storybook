import React, { useEffect, useState } from "react";
import './styles.scss';
import { CloseIcon, CheckIcon, InfoIcon, WarningIcon, ErrorIcon } from "../Misc";
import { AlertProps } from './types';

export const Alert: React.FC<AlertProps> = ({
    message,
    type = 'info',
    onClose,
    onClick,
    title = '',
    className = '',
    style = {},
    variant = 'standard',
    position = 'top-right',
    label = '',
    animation = 'fade-out-left',
    autoDismissDuration = 0,
    onLabelClick = () => { },

}) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        if (autoDismissDuration > 0) {
            const timer = setTimeout(() => {
                if (onClose) {
                    onClose();
                }
                setVisible(false);
            }, autoDismissDuration);
            return () => clearTimeout(timer);
        }
    }, [autoDismissDuration, onClose]);

    const icon = (() => {
        switch (type) {
            case 'info':
                return <span role="img" aria-label="info"><InfoIcon /></span>;
            case 'success':
                return <span role="img" aria-label="success"><CheckIcon /></span>;
            case 'warning':
                return <span role="img" aria-label="warning"><WarningIcon /></span>;
            case 'error':
                return <span role="img" aria-label="error"><ErrorIcon /></span>;
            default:
                return null;
        }
    })();
    return (
        <div className={`alert alert--${animation} ${visible ? `alert--visible` : `alert--invisible`} alert--${position} alert--${variant} alert--${type} ${className}`} style={style}>
            <div className={`alert__icon-container alert__icon-container--${variant} alert__icon-container--${type} ${className}__icon-container`} onClick={onClick}>
                {icon && <span className={`alert__icon-container__alert-icon alert__icon-container__alert-icon--${variant} alert__icon-container__alert-icon--${type} ${className}__icon-container__alert-icon`}>
                    {icon}
                </span>}
            </div>
            <div className={`alert__content alert__content--${variant} alert__content--${type} ${className}__content`}>
                {title && <h4 className={`alert__content__alert-title alert__content__alert-title--${variant} alert__content__alert-title--${type} ${className}__content__alert-title`}>
                    {title}
                </h4>}
                <p className={`alert__content__alert-message alert__content__alert-message--${variant} alert__content__alert-message--${type} ${className}__content__alert-message`}>
                    {message}
                </p>
            </div>
            <div className={`alert__label-container alert__label-container--${variant} alert__label-container--${type} ${className}__label-container`}>
                {label && <span onClick={onLabelClick} className={`alert__label-container__label alert__label-container__label--${variant} alert__label-container__label--${type} ${className}__label-container__label`}>
                    {label}
                </span>}
                {onClose && (
                    <button className={`alert__label-container__close-button alert__label-container__close-button--${variant} alert__label-container__close-button--${type} ${className}__label-container__close-button`} onClick={() => {
                        setVisible(false);
                        onClose();
                    }} aria-label="Close Alert">
                        <CloseIcon />
                    </button>
                )}
            </div>
        </div>
    );
}