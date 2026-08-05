import type {MayBeString} from "@at.dkm/dkm-ts-lib-django/lib/dkm_django_m";

interface Props{
    error:MayBeString
}
export default function NativeErrInfo(props:Props) {
    return (
        <p className="text-red-500 text-sm mt-1">
            { props.error}</p>
    )
}