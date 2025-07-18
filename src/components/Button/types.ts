import { ClassComponentProps, Size, State, Variant } from '../../types';

export enum ButtonColors {
    Primary = 'primary',
    Secondary = 'secondary',
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
    Success = 'success',
    Inherit = 'inherit',
    InheritWhite = 'inherit-white'
}

export interface ButtonProps extends ClassComponentProps {
    /**
     * Button contents
     */
    children: React.ReactNode;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Button variant
     */
    color: ButtonColors;
    /**
     * Button size
     */
    size: Size;
    /**
     * Kind of button
     */
    variant: Variant;
    /**
     * Type of the button
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Loading state
     */
    loading?: boolean;
    /**
     * State
     */
    state: State;
}