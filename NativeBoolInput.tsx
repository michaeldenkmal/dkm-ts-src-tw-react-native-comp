import {calcRealClassName} from "./native_ctrl_util.ts";
import type {MayBeBool} from "@at.dkm/dkm-ts-lib-django/lib/dkm_django_m";

interface Props {
    value:MayBeBool;
    onChange:(value:MayBeBool)=>void;
    className?:string
    additionalClassName?:string
    disabled?:boolean
    required?:boolean
    readonly?:boolean
}

export default function NativeBoolInput(props: Props) {
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        props.onChange(evt.target.checked);
    }
    const className = calcRealClassName("form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out ",props.className, props.additionalClassName);
    const myChecked:boolean|undefined = props.value==null ? undefined : props.value;
    return <input
        type="checkbox"
        className={className}
        checked={myChecked}
        onChange={handleChange}
        disabled={props.disabled}
        required={props.required}
        readOnly={props.readonly||false}
    />
}
