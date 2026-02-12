import {fmtGermanDate} from "@at.dkm/dkm-ts-lib-gen/lib/dateUtil";
import * as u from "@at.dkm/dkm-ts-lib-gen/lib/u"
import "./NativeDateInput.css"
import {calcRealClassName} from "./native_ctrl_util.ts";
import type {MayBeDate} from "@at.dkm/dkm-ts-lib-gen/lib/may_be_types";
import {useEffect, useState} from "react";


interface Props {
    value: MayBeDate
    onChange: (value: MayBeDate) => void
    className?:string
    additionalClassName?:string
    mindate?:MayBeDate
    maxdate?: MayBeDate
    disabled?:boolean
}

//https://stackoverflow.com/questions/45397107/reactjs-input-type-date-format-date
// This actually has nothing to do with React. for <input type="date"> values, Chrome expects the value of the date to be in YYYY-MM-DD format.

function fmtGoogleDateInputVal(value:MayBeDate):string {
    if (!value) {
        return "";
    }
    const y= value.getFullYear();
    const month = value.getMonth() +1;
    const d = value.getDate();

    return u.fmt4DigitNum(y) + "-" + u.fmt2DigitNum(month) + "-" + u.fmt2DigitNum(d)
}


function NativeDateInput(props: Props) {

    const szMin = fmtGermanDate(props.mindate||"" );
    const szMax = fmtGermanDate(props.maxdate||"");

    const  className = calcRealClassName("native-date-input",props.className,props.additionalClassName);
    const [s_value, s_setValue] = useState("");
    useEffect(()=>{
        const value = fmtGoogleDateInputVal(props.value);
        s_setValue(value);
    },[props.value])


    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        // const inp = evt.target as HTMLInputElement;
        // const utcDate:MayBeDate = inp.valueAsDate;
        // const realDate:MayBeDate =  utcDate ? new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate()) : null;
        // props.onChange(realDate);
        s_setValue(evt.target.value)
    }
    function commit(v) {
        if (!v || v.length !== 10) return; // ignorier unvollständig
        const [y,m,d] = v.split("-");
        const date = new Date(+y, m-1, +d);
        // hier z.B. props.onChange(v) oder parse zu Date
        props.onChange(date)
    }

    function handleBlur(e) {
        commit(e.target.value);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") commit(e.currentTarget.value);
    }
    const addProps:Record<string, any > ={};
    if (props.disabled) {
        addProps.disabled = true;
    }

    return <input type={"date"} value={s_value} onChange={handleChange} className={className}
                  onBlur={handleBlur} onKeyDown={handleKeyDown}
        min={szMin} max={szMax} {...addProps} />
}

export default NativeDateInput;