import type {MayBeBool} from "@at.dkm/dkm-ts-lib-django/lib/dkm_django_m";
import {CheckIcon} from "@heroicons/react/16/solid";

interface Props{
    value:MayBeBool
    className:string
    hint?:string
}
export default function NativeBoolViewElem(props:Props) {

    if (props.value) {
        return <CheckIcon title={props.hint||""} className={props.className}/>
    }
    return null
}