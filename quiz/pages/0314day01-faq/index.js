import {
	Background, Glassbox, Glass, Wrap, My, Profile, Name, Right, List, Menu, ThirdMenu, Line,
	WrapQuestion, InnerQuestion, Question1, Question2, Arrow, Banner, IconWrap, Icon, IconName, IconNameMy
} from '../../../styles/stylesheet'

export default function AAAPage() {

	return (
		<Background>
			<Glassbox>
				<Glass src='/quiz/01-faq/ic-58-main-search-black_2022-03-14/ic-58-main-search-black.png'></Glass>
			</Glassbox>
			<Wrap>
				<My>마이</My>
				<Profile src='/quiz/01-faq/img-60-profile-image_2022-03-14/img-60-profile-image.png'></Profile>
				<Name>임정아</Name>
				<Right src='/quiz/01-faq/ic-28-arrow_2022-03-14/ic-28-arrow.png'></Right>
			</Wrap>
			<List>
				<Menu>공지사항</Menu>
				<Menu>이벤트</Menu>
				<ThirdMenu>FAQ</ThirdMenu>
				<Menu>Q&A</Menu>
			</List>
			<Line></Line>


			<WrapQuestion>
				<InnerQuestion>
					<Question1>Q.01</Question1>
					<Question2>리뷰 작성은 어떻게 하나요?</Question2>
				</InnerQuestion>
				<Arrow src='/quiz/01-faq/ic-70-arrow-right_2022-03-14/ic-70-arrow-right.png'></Arrow>
			</WrapQuestion>

			<WrapQuestion>
				<InnerQuestion>
					<Question1>Q.02</Question1>
					<Question2>리뷰 수정/삭제는 어떻게 하나요?</Question2>
				</InnerQuestion>
				<Arrow src='/quiz/01-faq/ic-70-arrow-right_2022-03-14/ic-70-arrow-right.png'></Arrow>
			</WrapQuestion>

			<WrapQuestion>
				<InnerQuestion>
					<Question1>Q.03</Question1>
					<Question2>아이디/비밀번호를 잊어버렸어요.</Question2>
				</InnerQuestion>
				<Arrow src='/quiz/01-faq/ic-70-arrow-right_2022-03-14/ic-70-arrow-right.png'></Arrow>
			</WrapQuestion>

			<WrapQuestion>
				<InnerQuestion>
					<Question1>Q.04</Question1>
					<Question2>회원탈퇴를 하고싶어요.</Question2>
				</InnerQuestion>
				<Arrow src='/quiz/01-faq/ic-70-arrow-right_2022-03-14/ic-70-arrow-right.png'></Arrow>
			</WrapQuestion>

			<WrapQuestion>
				<InnerQuestion>
					<Question1>Q.05</Question1>
					<Question2>출발지 설정은 어떻게 하나요?</Question2>
				</InnerQuestion>
				<Arrow src='/quiz/01-faq/ic-70-arrow-right_2022-03-14/ic-70-arrow-right.png'></Arrow>
			</WrapQuestion>

			<WrapQuestion>
				<InnerQuestion>
					<Question1>Q.06</Question1>
					<Question2>비밀번호를 변경하고 싶어요.</Question2>
				</InnerQuestion>
				<Arrow src='/quiz/01-faq/ic-70-arrow-right_2022-03-14/ic-70-arrow-right.png'></Arrow>
			</WrapQuestion>

			<Banner>
				<IconWrap>
					<Icon src='/quiz/01-faq/ic-58-main-home-unselected_2022-03-14/ic-58-main-home-unselected.png'></Icon>
					<IconName>홈</IconName>
				</IconWrap>

				<IconWrap>
					<Icon src='/quiz/01-faq/ic-58-main-location-unselected_2022-03-14/ic-58-main-location-unselected.png'></Icon>
					<IconName>잇츠로드</IconName>
				</IconWrap>

				<IconWrap>
					<Icon src='/quiz/01-faq/ic-58-main-like-unselected_2022-03-14/ic-58-main-like-unselected.png'></Icon>
					<IconName>마이찜</IconName>
				</IconWrap>

				<IconWrap>
					<Icon src='/quiz/01-faq/ic-58-main-my-selected_2022-03-14/ic-58-main-my-selected.png'></Icon>
					<IconNameMy>마이</IconNameMy>
				</IconWrap>

			</Banner>
	
		</Background>
    
	)
}