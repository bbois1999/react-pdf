
import dynamic from "next/dynamic";
import { useEffect, useState } from "react"


const InvoicePDF = dynamic(() => import("./pdf"), {
    ssr: false,
  });


const View = () => {

    const [client, setClient] = useState(false)

    useEffect(() => {
        setClient(true)
    }, [])

    return(
        <InvoicePDF/>
    )
}


export default View