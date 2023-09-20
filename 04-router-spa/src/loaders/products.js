import products from '../database.json'

export default function loadProducts({ params }) {
    const product = products.find(o=>o.id === +params.productId)
    if(!product) {
        throw new Response('Error', { status: 404 })
    }
    return product
}