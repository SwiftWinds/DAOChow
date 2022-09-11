const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div>Set Up Fridge</div>
          <div>Purchase a fridge and put in on street X in city Y</div>
          <div>Reward: 350 MATIC, 1 DCcoin</div>
        </li>
      ))}
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
          <div>Get donations from local grocery stores</div>
          <div>Reward: 30 MATIC, 1 DCcoin</div>
        </li>
      ))}
    </ul>
  )
}
  