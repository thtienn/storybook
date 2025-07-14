export interface DropdownOption {
    label: string;
    value: string;
}
export type DropdownProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
    label: string;
    options: DropdownOption[];
    onChange: (value: DropdownOption) => void;
    value: DropdownOption;
    disabled?: boolean;
    placeholder?: string;
};
