export type CardHeaderProps = {
    /**
     * The title of the card header.
     */
    title: string;

    /**
     * The subtitle of the card header.
     */
    subtitle?: string;

    /**
     * The icon to display in the card header.
     */
    icon?: React.ReactNode;

    /**
     * Additional CSS classes to apply to the card header.
     */
    className?: string;

    /**
     * Additional styles to apply to the card header.
     */
    style?: React.CSSProperties;
};