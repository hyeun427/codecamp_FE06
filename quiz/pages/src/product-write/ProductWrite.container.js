// 여기는 컨테이너 컴포넌트
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './ProductWrite.queries'
import ProductWriteUI from '../product-write/ProductWrite.presenter'


export default function ProductWrite(props) {
	const router = useRouter()
	const [isActive, setIsActive] = useState(false)
	
	const [mySeller, setMySeller] = useState("")
	const [myName, setMyName] = useState("")
	const [myPrice, setMyPrice] = useState("")
	const [myContents, setMyContents] = useState("")
	
	const [createProduct] = useMutation(CREATE_PRODUCT)
	const [updateProduct] = useMutation(UPDATE_PRODUCT)

	const onClickUpdate = async () => {
		await updateProduct({
			variables: {
				productId: router.query.mynumber, updateProductInput: {
					name: myName,
					detail: myContents,
					price: Number(myPrice),
			}, }
		})
		alert("상품 수정에 성공하였습니다.")
		router.push(`/day08/${router.query.mynumber}`)
	}
	
	const ProductUpload = async () => {
		const result = await createProduct({
			variables: {
				seller: mySeller,
				createProductInput:
				{
					name: myName,
					price: Number(myPrice),
					detail: myContents
				}}
		})
		alert("상품이 등록되었습니다.")
		router.push(`/day08/${result.data.createProduct._id}`)
	}

	const onChangeSeller = (event) => {
		setMySeller(event.target.value)

		if(event.target.value !== "" && myName !== "" && myPrice !== "" && myContents !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
	}
	const onChangeName = (event) => {
		setMyName(event.target.value)

		if(mySeller !== "" && event.target.value !== "" && myPrice !== "" && myContents !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
	}
	const onChangePrice = (event) => {
		setMyPrice(event.target.value)

		if(mySeller !== "" && myName !== "" && event.target.value !== "" && myContents !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
	}
	const onChangeContents = (event) => {
		setMyContents(event.target.value)

		if(mySeller !== "" && myName !== "" && myPrice !== "" && event.target.value !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
	}

	return (
		<ProductWriteUI
			ProductUpload={ProductUpload}
			onChangeSeller={onChangeSeller}
			onChangeName={onChangeName}
			onChangePrice={onChangePrice}
			onChangeContents = {onChangeContents}
			onClickUpdate={onClickUpdate}
			isActive={isActive}
			isEdit={props.isEdit}
		/>
	)
}