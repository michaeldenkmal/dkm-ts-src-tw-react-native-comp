import type {MayBeDecimal} from "@at.dkm/dkm-ts-lib-django/lib/dkm_django_m";
import Decimal from "decimal.js";

export function fmtDecimal2Digits(dec:MayBeDecimal):string {
    if (!dec) {
        return "";
    }
    return dec.toFixed(2);
}

export function decimalToNumber(dec:MayBeDecimal):number|null {
    if (!dec) {
        return null;
    }
    return dec.toNumber()
}

export function numberToDecimal(num:number|null|undefined):Decimal|null{
    if (!num) {
        return null;
    }
    return Decimal(num);
}
