import React from 'react'

interface IQuoteProps {
  quote: string
}

const Quote = (props: IQuoteProps) => {

  const { quote } = props

  return (
    <div>
      <h1>{quote}</h1>
    </div>
  )
}

export default Quote
