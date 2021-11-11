# Kanye Quote Typescript Intro

An introduction to using Typescript in React.

It involved writing a fetch from the Kanye Rest API, typing the response by using an interface and then passing the quote as a prop.



```
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
```


