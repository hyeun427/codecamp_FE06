// 상품 상세 화면
import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

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

export default function ProductDetailPage() {
	const router = useRouter()

	const { data } = useQuery(FETCH_PRODUCT, {
		variables: {productId: router.query.mynumber}
	})

	const onClickMove = () => {
		router.push(`/day08/${router.query.mynumber}/edit`)
	}

	return (
		<div>
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>상품명: {data?.fetchProduct.name}</div>
            <div>가격: {data?.fetchProduct.price}</div>
            <div>내용: {data?.fetchProduct.contents}</div>
            <button onClick={onClickMove}>수정하기 </button>
		</div>
	)
}