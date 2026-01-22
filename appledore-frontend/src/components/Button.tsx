import { type ReactElement} from "react";


interface ButtonProps {
size: "sm" | "md" | "lg";
text: string;
startIcon ?: ReactElement;
endIcon ?: ReactElement;
disabled?: boolean;
onClick?: () => void;
}

// const variantStyles = {
// "primary": " text-white ",
// "secondary": " text-purple-400"
// }

const sizeStyles={
    "sm": "px-2 py-2",
    "md": "px-2 py-4",
    "lg": "px-4 py-6"
}

const defaultStyles="rounded-lg text-white font-light flex bg-black items-center gap-1 hover:"
//horizontal center: justify-center
//vertical center: items center

export const Button = (props: ButtonProps) => {
return <button className={`${defaultStyles} ${props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${sizeStyles[props.size]}`} onClick={props.onClick}> 
<div className={"pr-1"}>{props.startIcon}</div>
{props.text}
<div>{props.endIcon}</div>
</button>
}