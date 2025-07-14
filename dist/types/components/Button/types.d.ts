export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Button contents
     */
    children: React.ReactNode | string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Button variant
     */
    variant?: 'primary' | 'secondary' | 'outline';
    /**
     * Button size
     */
    size?: 'small' | 'regular' | 'large';
    /**
     * Disabled state
     */
    disabled?: boolean;
    /**
     * Icon to display on the left side of the button
     */
    leftIcon?: React.ReactNode;
    /**
     * Icon to display on the right side of the button
     */
    rightIcon?: React.ReactNode;
}
