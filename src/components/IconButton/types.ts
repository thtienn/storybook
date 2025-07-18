import { ClassComponentProps, Size, State } from "@/types"

export enum IconButtonColors {
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

export interface IconButtonProps extends ClassComponentProps {
    state?: State,
    color?: IconButtonColors,
    size?: Size,
    icon?: React.ReactNode;
    onClick: () => void
}