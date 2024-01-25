import { useState, useEffect } from "react";
import { QuotesIndex } from "./QuotesIndex";
import axios from "axios";

export function Content() {
  const [quotes, setQuotes] = useState([])

  const getQuote = () => {
    console.log("getting quote")
    axios.get("https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json").then(response => {
      console.log(response.data)
      setQuotes(response.data)
    })
  }

  useEffect(getQuote, [])

  return (
    <div>
      <QuotesIndex quotes={quotes}/>
    </div>
  )
}