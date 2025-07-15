import { ClassComponentProps } from '../../types/global-type';
export interface ButtonProps  extends ClassComponentProps {
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
    color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit' | 'inherit-white';
    /**
     * Button size
     */
    size: 'small' | 'medium' | 'large';
    /**
     * Kind of button
     */
    variant: 'outlined' | 'contained' | 'text';
    /**
     * Disabled state
     */
    disabled?: boolean;
    /**
     * Type of the button
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Loading state
     */
    loading?: boolean;

}