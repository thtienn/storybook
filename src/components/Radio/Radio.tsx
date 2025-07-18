import React, { useState } from "react";
import './styles.scss';
import { RadioProps, RadioColors } from "./types";
import { Size, State } from "@/types"

export const Radio: React.FC<RadioProps> = ({
    className = '',
    style = {},
    color = RadioColors.Default,
    state = State.Enabled,
    size = Size.Medium,
    onClick
}) => {
    const [checked, setChecked] = useState<boolean>(false);
    const handleClick = () => {
        setChecked(!checked);
        {onClick && onClick()}
    }

    return (
        <input onClick={handleClick} 
            checked={checked} 
            type="radio" 
            className={`radio radio--${color} radio--${state} radio--${size} ${className}`} 
            style={style}
        />
    )
}