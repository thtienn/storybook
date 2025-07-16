import { ClassComponentProps } from "@/types";

export enum BadgesVariant {
    Dot = 'dot',
    Standard = 'standard'
}

export enum BadgesColors {
    Primary = 'primary',
    Secondary = 'secondary',
    Error =  'error',
    Warning = 'warning',
    Info = 'info',
    Success = 'success',
    Default = 'default',
}

export interface BadgesProps extends ClassComponentProps {
    variant?: BadgesVariant;
    color?: BadgesColors;
    content?: React.ReactNode;
    component?: React.ReactNode;
}