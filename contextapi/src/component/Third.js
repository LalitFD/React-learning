import { useContext } from "react";
import { MessageContext, DataContext } from "../App";


function Third() {
    let message = useContext(MessageContext)
    let { m1, m2, m3 } = useContext(DataContext)
    return <>
        <h3>Third componet {message}</h3>
        <h3>{m1}:{m2}:{m3}</h3>
    </>
}
export default Third;