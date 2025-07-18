import { Size, State, ClassComponentProps } from "@/types";

export enum RadioColors {
    Primary = 'primary',
    Secondary = 'secondary',
    Error =  'error',
    Warning = 'warning',
    Info = 'info',
    Success = 'success',
    Default = 'default',
    Inherit = 'inherit',
    InheritWhite = 'inherit-white'
}


export interface RadioProps extends ClassComponentProps {
    size?: Size;
    state?: State;
    color?: RadioColors;
    onClick?: () => void
}