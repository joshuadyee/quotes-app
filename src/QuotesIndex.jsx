export function QuotesIndex(props) {
  
  return (
    <div>
      <h1>Quotes Index</h1>
      {props.quotes.map(quote => (
        <div key={quote.id}>
          <p><b>Quote:</b> {quote.quote}</p>
          <p>Context: {quote.context}</p>
          <p>Source: {quote.source}</p>
          <p>Theme: {quote.theme}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}