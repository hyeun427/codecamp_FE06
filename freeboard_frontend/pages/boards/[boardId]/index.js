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
// import { useQuery, gql } from '@apollo/client'
// import { useRouter } from 'next/router'

// const FETCH_BOARD = gql `
// 	query fetchBoard($boardId: ID!){
// 		fetchBoard(boardId: $boardId){

// 			_id
// 			writer
// 			title
// 			contents
// 			youtubeUrl
// 			likeCount
// 			disLikeCount
// 			images
// 			boardAddress {
// 				_id
// 				zipcode
// 				address
// 				addressDetail
// 				createdAt
// 				updatedAt
// 				deletedAt
// 			}
// 			user{
// 				_id 
// 				email
// 				name
// 				picture
// 				userPoint
// 				createdAt
// 				updatedAt
// 				deletedAt
// 			}
// 			createdAt
// 			updatedAt
// 			deletedAt
// 		}
// 	}
// `

export default function StaticRoutedPage() {
	// const router = useRouter
	// console.log(router)

	// const { data } = useQuery(FETCH_BOARD, {
	// 	variables: {boardId: router.query.boardId}
	// })

	return (
		// <Wrapper>
		// 	<ProfileWrapper>
		// 		<Profile>
		// 			<Photo>프로필사진</Photo>
		// 			<Writer> {data?.fetchBoard.writer} </Writer>
		// 			<Date> {data?.fetchBoard.createdAt} </Date>
		// 		</Profile>
		// 		<IconWrapper>
		// 			<Share></Share>
		// 			<Spot></Spot>
		// 		</IconWrapper>
		// 	</ProfileWrapper>
		// 	<ContentWrapper>
		// 		<Title> {data?.fetchBoard.title} </Title>
		// 		<ContentImage> {data?.fetchBoard.images} </ContentImage>
		// 		<Content> {data?.fetchBoard.contents} </Content>
		// 	</ContentWrapper>
		// 	<YoutubeWrapper>
		// 		<Youtube> {data?.fetchBoard.youtubeUrl} </Youtube>
		// 	</YoutubeWrapper>
		// 	<LikeWrapper>
		// 		<InnerWrapper>
		// 			<ThumbsButton></ThumbsButton>
		// 			<LikeCount>1920</LikeCount>
		// 		</InnerWrapper>
		// 		<InnerWrapper>
		// 			<ThumbsButton></ThumbsButton>
		// 			<DislikeCount>1920</DislikeCount>
		// 		</InnerWrapper>
		// 	</LikeWrapper>
		// 	<InputWrapper>
		// 		<Input>목록으로</Input>
		// 		<Input>수정하기</Input>
		// 		<Input>삭제하기</Input>
		// 	</InputWrapper>
		// </Wrapper>
		<OutWrapper>
			<Wrapper>
				<ProfileWrapper>
					<Profile>
						<Photo src="/img/profile.png" />
						<ProfileDetail>
							<Writer>작성자</Writer>
							<Date>Date:2022.03.20</Date>
						</ProfileDetail>
					</Profile>
					<IconWrapper>
						<Share src="/img/share.png" ></Share>
						<Spot src="/img/spot.png" />
					</IconWrapper>
				</ProfileWrapper>



				<ContentWrapper>
					<Title>게시글 제목입니다.</Title>
					<ContentImage>첨부한 이미지 들어가는 곳</ContentImage>
					<Content>글쓴 내용 들어가는 곳</Content>
				</ContentWrapper>


				<YoutubeWrapper>
					<Youtube>영상 들어가는 곳</Youtube>
				</YoutubeWrapper>



				<LikeWrapper>
					<InnerWrapper>
						<ThumbsButton>좋아요이미지</ThumbsButton>
						<LikeCount>1920</LikeCount>
					</InnerWrapper>
					<InnerWrapper>
						<ThumbsButton>싫어요이미지</ThumbsButton>
						<DislikeCount>1920</DislikeCount>
					</InnerWrapper>
				</LikeWrapper>
			</Wrapper>



			<ButtonWrapper>
				<Button>목록으로</Button>
				<Button>수정하기</Button>
				<Button>삭제하기</Button>
			</ButtonWrapper>
		</OutWrapper>
	);
}