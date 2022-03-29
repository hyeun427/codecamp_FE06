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
                seller: "짱구",
                createProductInput: {
                    name: "가방",
                    detail: "유치원가방",
                    price: 15000
                }
            }
        })
    }

    return (
        <>
            판매자: <input type="text" /><br />
            상품명: <input type="text" /><br />
            상품내용: <input type="text" /><br />
            상품가격: <input type="text" /><br />
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )

}