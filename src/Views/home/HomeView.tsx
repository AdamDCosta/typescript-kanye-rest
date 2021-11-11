import React from 'react'
import { useState } from 'react';
import Quote from "../../components/Quote/Quote";

interface IKanyeResponse {
  quote: string;
}

const HomeView: React.FC = () => {

  let [quote, setQuote] = useState("")
  
    const getQuote = (): void => {
      fetch("https://api.kanye.rest/")
      .then((res: Response) =>  res.json())
      .then((res: IKanyeResponse) => {
        setQuote(res.quote);
      })
    } 

  return (
    <div>
      <button onClick={getQuote}>
        Get a quote
      </button>
      <Quote quote={quote}/>
    </div>
  )
}

export default HomeView
