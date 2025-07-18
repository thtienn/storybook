import React from 'react';
import { ClassComponentProps } from '@/types/global-type';

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
