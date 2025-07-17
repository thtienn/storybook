import { ClassComponentProps } from "@/types";
import React from "react";

export enum AvatarSize {
    Xs = 'xs',
    Sm = 'sm',
    Md = 'md',
    Lg = 'lg'
}

export enum AvatarVariant {
    Circular = 'circular',
    Rounded = 'rounded',
    Square = 'square'
}

export interface AvatarProps extends ClassComponentProps {
    size?: AvatarSize;
    badge?: boolean;
    variant?: AvatarVariant;
    onClick?: () => void;
    src?: string;
    alt?: string;
    children?: React.ReactNode;
    color?: string;
}
