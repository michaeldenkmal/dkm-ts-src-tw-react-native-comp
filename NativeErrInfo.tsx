import type {MayBeString} from "@at.dkm/dkm-ts-lib-gen/lib/may_be_types";

interface Props{
    error:MayBeString
}
export default function NativeErrInfo(props:Props) {
    return (
        <p className="text-red-500 text-sm mt-1">
            { props.error}</p>
    )
}