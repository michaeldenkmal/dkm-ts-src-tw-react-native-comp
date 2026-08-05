interface Props {
    children?:any
    defaultBtn?:boolean
    onClick:()=>void
    className?:string
}

function DkmButton(props:Props) {

    let btnClassName = props.defaultBtn  ? "dkm-default-button" :"dkm-button";
    if (props.className) {
        btnClassName = btnClassName + " " + props.className
    }

    return <button className={btnClassName} onClick={props.onClick}>
        {props.children}
    </button>
}

export default DkmButton;