export type CardItemProps = {
  id: string
  title: string
  description: string
  price: number
  category: string

  amount: number
  onAdd?: (id: string) => void
}

export default function ResponseItem(props: CardItemProps) {
  const { id, title, description, price, category, amount, onAdd } = props

  function addItemToCart() {
    onAdd?.(id)
  }

  return (
    <div>
      <div id="product">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <p>{category}</p>
        {onAdd ? (
          <button onClick={addItemToCart}>Legg i handlekurv</button>
        ) : null}
      </div>
    </div>
  )
}
/*
        <div id="cart">
            <p>{title}</p>
            <p>{amount}</p>
        </div>

*/
