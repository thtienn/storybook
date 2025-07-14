export interface TypoProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 's1' | 's2' | 's3' | 's4' | 's5' | 'p1' | 'p2' | 'p3' | 'p4' | 'c1' | 'c2' | 'description';
    children: React.ReactNode;
    type?: 'bold' | 'semibold' | 'regular';
}
