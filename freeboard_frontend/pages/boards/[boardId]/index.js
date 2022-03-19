import {
	Wrapper,
	ProfileWrapper,
	Profile,
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
	Like,
	DisLike,
	List,
	Edit,
	Delete
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
			disLikeCount
			images
			boardAddress
			user
			createdAt
			updatedAt
			deletedAt
		}
	}
`

export default function StaticRoutedPage() {
	const router = useRouter
	console.log(router)

	const { data } = useQuery(FETCH_BOARD, {
		variables: {boardId: router.query.boardId}
	})

	return (
		<Wrapper>
			<ProfileWrapper>
				<Profile>
					<Photo>프로필사진</Photo>
					<Writer> {data?.fetchBoard.writer} </Writer>
					<Date> {data?.fetchBoard.createdAt} </Date>
				</Profile>
				<IconWrapper>
					<Share></Share>
					<Spot></Spot>
				</IconWrapper>
			</ProfileWrapper>
			<ContentWrapper>
				<Title> {data?.fetchBoard.title} </Title>
				<ContentImage> {data?.fetchBoard.images} </ContentImage>
				<Content> {data?.fetchBoard.contents} </Content>
			</ContentWrapper>
			<YoutubeWrapper>
				<Youtube> {data?.fetchBoard.youtubeUrl} </Youtube>
			</YoutubeWrapper>
			<LikeWrapper>
				<Like> 이미지 넣기 </Like>
				<DisLike> 이미지 넣기 </DisLike>
			</LikeWrapper>
			<ButtonWrapper>
				<List>목록으로</List>
				<Edit>수정하기</Edit>
				<Delete>삭제하기</Delete>
			</ButtonWrapper>
		</Wrapper>
	);
}