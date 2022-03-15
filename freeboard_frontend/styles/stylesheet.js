import styled from '@emotion/styled'

//전체 배경 패딩 넣으면 될듯
export const Background = styled.div`
width: 1200px;
padding: 60px 100px 100px;
`

//내용물 배경
export const Wrapper = styled.div`
width: 996px;
`

// Title 부분
export const Title = styled.div`
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 53px;
text-align: center;
color: black;

display: flex;
flex-direction: row;
justify-content: center;
`

// 작성자 + 비밀번호 + 박스들까지, 이 박스 디스플레이를 설정하는게 맞나, PasswordWrap을 설정하는게 맞나
export const IdWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

// 작성자 + 박스까지
export const NameWrap = styled.div`
width: 486px;
height: 92px;
`


// 작성자
export const Name = styled.div`
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

margin-bottom: 16px;
`

// 작성자 입력박스, placeholder css 적용할 것
export const NameBox = styled.input`
width: 486px;
height: 52px;
background: #FFFFFF;
border: 1px solid #BDBDBD;
box-sizing: border-box;
`

// 비밀번호 + 박스까지
export const PasswordWrap = styled.div`
width: 486px;
height: 92px;
`

// 비밀번호
export const Password = styled.div`
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

margin-bottom: 16px;
`

// 비밀번호 입력박스, placeholder css 적용할 것
export const PasswordBox = styled.input`
width: 486px;
height: 52px;
background: #FFFFFF;
border: 1px solid #BDBDBD;
box-sizing: border-box;
`

// 제목 + 박스까지
export const SubjectWrap = styled.div`
width: 100%;
height: 92px;
`

// 제목
export const Subject = styled.div`
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

margin: 40px 0px 16px;
`

// 제목 입력박스
export const SubjectBox = styled.input`
width: 100%;
height: 52px;
border: 1px solid #BDBDBD;
box-sizing: border-box;
`

// 내용 + 박스까지
export const ContentWrap = styled.div`
width: 100%;
height: 520px;
`

// 내용
export const Content = styled.div`
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

margin: 40px 0px 16px;
`

// 내용 입력박스, placeholder css 적용할 것
export const ContentBox = styled.input`
width: 100%;
height: 480px;
border: 1px solid #BDBDBD;
box-sizing: border-box;
`

// 주소 전체 박스
export const AddressWrap = styled.div`
width: 100%;
height: 242px;
`

// 주소
export const Address = styled.div`
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

margin: 37px 0px 14px;
`

// 우편번호 박스랑 검색버튼, 상위 박스로 더 감싸야할듯

// 우편번호 박스
export const AddressNum = styled.input`
width: 77px;
height: 52px;
border: 1px solid #BDBDBD;
box-sizing: border-box;
`

// 우편번호 검색버튼
export const BtnAddress = styled.button`
`

// 상세주소 박스
export const AddressBox = styled.input`
`

// 유튜브 + 링크박스까지
export const YoutubeWrap = styled.input`
`

// 유튜브
export const Youtube = styled.div`

`

// 유튜브 링크 박스
export const YoutubeBox = styled.input`
`

//사진 전체 박스
export const PhotoWrap = styled.div`
`

// 사진
export const Photo = styled.div`
`

// 사진 업로드 단추
export const PhotoBox = styled.input`
`

// 업로드 박스 안 내용
export const PhotoContent = styled.div`
`

// 메인 설정
export const MainSetting = styled.div`
`

// 라디오버튼 유튜브
export const RadioYoutube = styled.input`
`

// 라디오버튼 사진
export const RadioPhoto = styled.input`
//라디오 버튼을 어디에 radio라고 쓰면되는지 확인
`

// 등록 버튼
export const Register = styled.input`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

width: 179px;
height: 52px;
background: #FFD600;

font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #000000;

padding: 0px 8px;
`

// 항목 글씨들 css 설정값이 같은 태그들 하나로 통일해서 사용할 수도 있을듯