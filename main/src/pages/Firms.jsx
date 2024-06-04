import { useEffect } from "react"
import useStockRequest from "../services/useStockRequest"

const Firms = () => {
  const {getFirms} = useStockRequest()

  useEffect(()=> {
    getFirms()

  }, [])
  return (<div> </div>
  )
}

export default Firms
