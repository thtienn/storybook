import { ClassComponentProps } from "@/types/global-type";

export enum TypoVariant {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    CAPTION = 'caption',
    OVERLINE = 'overline',
    SUBTITLE2 = 'subtitle2',
    SUBTITLE1 = 'subtitle1',
    BODY2 = 'body2',
    BODY1 = 'body1',
    CUSTOM = 'custom',
}

export interface TypoProps extends ClassComponentProps {
    variant?: TypoVariant;
    content: React.ReactNode;
    gutter: boolean;
}
