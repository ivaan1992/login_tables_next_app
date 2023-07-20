import Link from 'next/link'
const products = [
  { slug: 'phone', title: 'phone', id: 1 },
  { slug: 'laptop', title: 'laptop', id: 2 },
  { slug: 'keyboard', title: 'keyboard', id: 3 },
  { slug: 'headphones', title: 'headphones', id: 4 },
  { slug: 'usb', title: 'usb', id: 5 },
  
]
function Links() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href="/product/[productId]" as={`/product/${product.slug}`}>
           {product.title}
          </Link>
        </li>
      ))}
       
    </ul>
  )
}
export default Links;