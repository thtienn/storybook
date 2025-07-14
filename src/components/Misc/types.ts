import { ClassComponentProps } from "@/types/global-type";

export interface IconProps extends ClassComponentProps {
    width?: string | number;
    height?: string | number;
    fill?: string;
    stroke?: string;
    strokeWidth?: string | number;
}