import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`
	query fetchProduct($productId: ID){
		fetchProduct(productId: $productId){

			_id
			seller
			name
			detail
			price
		}
	}
`

export default function StaticRoutedPage() {
	const router = useRouter()
	console.log(router)

	const { data } = useQuery(FETCH_PRODUCT, {
		variables: {productId: router.query.productId}
	})

	console.log(data)

	return (
		<div>
			<div>판매자 : {data ? data.fetchProduct.seller : "Loading..."}</div>
			<div>상품명 : {data ? data.fetchProduct.name : "Loading..."}</div>
			<div>상품내용 : {data ? data.fetchProduct.detail : "Loading..."}</div>
			<div>상품가격 : {data ? data.fetchProduct.price : "Loading..."}</div>
		</div>
	);
}