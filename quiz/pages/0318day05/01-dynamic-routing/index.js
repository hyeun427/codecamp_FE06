import {useState} from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

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

    const router = useRouter()

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")


    const onClickSubmit = async () => {
        try {
            const result = await createProduct({
                variables: {
                    seller: seller,
                    createProductInput: {
                        name: name,
                        detail: detail,
                        price: price
                    }
                }
            })
            console.log(result.data.createProduct._id)
            alert("상품 등록이 완료되었습니다!")
            alert("상세 페이지로 이동합니다.")
            router.push(`/day05/02-dynamic-routed/${result.data.createProduct._id}`)
        } catch (error) {
            alert(error.message)
        }
    } 
    
    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }
    
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    
    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }
    const onChangesetPrice = (event) => {
        setPrice(parseInt(event.target.value))
    }
    
    
    return (
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br />
            상품명: <input type="text" onChange={onChangeName}/><br />
            상품내용: <input type="text" onChange={onChangeDetail}/><br />
            상품가격: <input type="text" onChange={onChangesetPrice}/><br />
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )
}

