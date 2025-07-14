import React, { use, useEffect, useState } from "react";
// import { AlertProps } from '../../../dist/types/components/Alert/types';
import './Alert.scss';
import { ClassComponentProps } from "@/types/global-type";
import { CloseIcon } from "../Misc/CloseIcon";

export enum AlertAnimation {
    FadeOutLeft = 'fade-out-left',
    FadeOutRight = 'fade-out-right',
    FadeOutUp = 'fade-out-up',
    FadeOutDown = 'fade-out-down',
}

export interface AlertProps extends ClassComponentProps {
    title?: React.ReactNode;
    /**
     * Alert message
     *  */
    message: React.ReactNode;
    /**
     * Alert type
     */
    type?: 'info' | 'success' | 'warning' | 'error';
    /**
     * Alert variant
     */
    variant: 'filled' | 'outlined' | 'standard';
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Optional close handler
     */
    onClose?: () => void;
    /**
    dismissible?: boolean;
    /**
     * Callback when the alert is dismissed
     * */
    onDismiss?: () => void;
    /**
     * Additional class names for custom styling
     */
    className?: string;
    /**
     * Additional styles for custom styling
     */
    style?: React.CSSProperties;
    /**
     * Duration in milliseconds after which the alert will automatically dismiss
     */
    autoDismissDuration?: number;
    /**
     * Animation type
     */
    animation?: 'fade-out-left' | 'fade-out-right' | 'fade-out-up' | 'fade-out-down';
    /**
     * Position to display in the alert
     */
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
    /**
     * Label
     */
    label?: React.ReactNode;
    /**
     * Optional click handler for the label
     */
    onLabelClick?: () => void;
}


const CheckIcon = () => (
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

);

const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
);

const WarningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
    </svg>
);

const ErrorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
    </svg>

);

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