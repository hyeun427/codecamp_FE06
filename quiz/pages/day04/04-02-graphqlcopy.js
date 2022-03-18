import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_PRODUCT = gql`
	mutation createProduct($seller: String, $createProductInput:CreateProductInput!) {
		createProduct(seller: $seller, title: $title, contents: $contents){
			_id
			number
			message
		}
	}
`

export default function GraphqlMutationPage() {
	const [mySeller, setMySeller] = useState("")
	const [myTitle, setMyTitle] = useState("")
	const [myContents, setMyContents] = useState("")
	
	const [data, setData] = useState("")
	const [callApi] = useMutation(CREATE_PRODUCT)
	
	const callGraphqlApi = async () => {
		
		const result = await callApi({
			variables: { seller: mySeller, title: myTitle, contents: myContents}
		})
		console.log(result)
		console.log(result.data.createProduct.message)
		setData(result.data.createProduct.message)
	}

	// 이벤트핸들러함수 
	const onChangeSeller = (event) => {
		setMySeller(event.target.value)
	}
	
	const onChangeName = (event) => {
		setMyName(event.target.value)
	}
	
	const onChangeDetail = (event) => {
		setMyDetail(event.target.value)
	}

	return (
		<div>
			이름: <input type="text" onChange={onChangeSeller} /><br />
			생일: <input type="text" onChange={onChangeName} /><br />
			연락처: <input type="text" onChange={onChangeDetail} /><br />
			<button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
		</div>
	)
}










import axios from 'axios'
import {useState} from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProduct(){
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        await createProduct({ 
            variables: { 
                seller: "철수",
                createProductInput: {
                    name: "마우스",
                    detail: "좋은마우스",
                    price: 2000
                }
            } 
        })
    }
