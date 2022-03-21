import {
	OutWrapper,
	Wrapper,
	ProfileWrapper,
	Profile,
	ProfileDetail,
	Photo,
	Writer,
	Date,
	IconWrapper,
	Share,
	Spot,
	ContentWrapper,
	Title,
	ContentImage,
	Content,
	YoutubeWrapper,
	Youtube,
	LikeWrapper,
	InnerWrapper,
	ThumbsButton,
	LikeCount,
	DislikeCount,
	ButtonWrapper,
	Button
} from "../../../styles/stylesheet"
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql `
	query fetchBoard($boardId: ID!){
		fetchBoard(boardId: $boardId){
			_id
			writer
			title
			contents
			youtubeUrl
			likeCount
			dislikeCount
			images
			boardAddress {
				_id
				zipcode
				address
				addressDetail
				createdAt
				updatedAt
				deletedAt
			}
			# user{
			# 	_id 
			# 	email
			# 	name
			# 	picture
			# 	userPoint
			# 	createdAt
			# 	updatedAt
			# 	deletedAt
			# }
			createdAt
			# updatedAt
			# deletedAt
		}
	}
`

const StaticRoutedPage = () => {
	const router = useRouter()
	console.log(router)

	const { data } = useQuery(FETCH_BOARD, {
		variables: {boardId: router.query.boardId}
	})

	return (
		<OutWrapper>
			<Wrapper>
				<ProfileWrapper>
					<Profile>
						<Photo src="/img/profile.png" />
						<ProfileDetail>
							<Writer>{data?.fetchBoard.writer}</Writer>
							<Date>{data?.fetchBoard.createdAt.slice(0, 10)}</Date>
						</ProfileDetail>
					</Profile>
					<IconWrapper>
						<Share src="/img/share.png" ></Share>
						<Spot src="/img/spot.png" />
					</IconWrapper>
				</ProfileWrapper>
				<ContentWrapper>
					<Title>{data?.fetchBoard.title}</Title>
					<ContentImage>{data?.fetchBoard.images}</ContentImage>
					<Content>{data?.fetchBoard.contents}</Content>
				</ContentWrapper>
				<YoutubeWrapper>
					<Youtube>{data?.fetchBoard.youtubeUrl}</Youtube>
				</YoutubeWrapper>
				<LikeWrapper>
					<InnerWrapper>
						<ThumbsButton src="/img/thumbsUp.png" />
						<LikeCount>1920</LikeCount>
						{/* <LikeCount>{data?.fetchBoard.likeCount}</LikeCount> */}
					</InnerWrapper>
					<InnerWrapper>
						<ThumbsButton src="/img/thumbsDown.png" />
						<DislikeCount>1920</DislikeCount>
						{/* <DislikeCount>{data?.fetchBoard.disLikeCount}</DislikeCount> */}
					</InnerWrapper>
				</LikeWrapper>
			</Wrapper>



			<ButtonWrapper>
				<Button>목록으로</Button>
				<Button>수정하기</Button>
				<Button>삭제하기</Button>
			</ButtonWrapper>
		</OutWrapper>

	)	
}

export default StaticRoutedPage