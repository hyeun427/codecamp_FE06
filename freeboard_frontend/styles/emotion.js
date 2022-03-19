// import styled from "@emotion/styled";

// export const Wrapper = styled.div`
// 	width: 1200 px;
// 	border: 1 px solid black;
// 	margin: 100 px;
// 	padding-top: 80 px;
// 	padding-bottom: 100 px;
// 	padding-left: 102 px;
// 	padding-right: 102 px;

// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	border: none;
// 	box-shadow: 0 px 0 px 10 px gray;
// `
// export const Title = styled.div``
// export const WriterWrapper = styled.div``
// export const InputWrapper = styled.div``
// export const Label = styled.div``
// export const Writer = styled.input``
// export const Password = styled.input``
// export const SubjectWrapper = styled.div``
// export const Subject = styled.input``
// export const ContentsWrapper = styled.div``
// export const Contents = styled.input``
// export const AddressWrapper = styled.div``
// export const CodeWrapper = styled.div``
// export const Code = styled.input``
// export const SearchCode = styled.button``
// export const Address = styled.input``
// export const YoutubeWrapper = styled.div``
// export const Youtube = styled.input``
// export const ImageWrapper = styled.div``
// export const UploadButton = styled.button``
// export const OptionWrapper = styled.div``
// export const RadioButton = styled.button``
// export const RadioLabel = styled.div``
// export const ButtonWrapper = styled.div``
// export const SubmitButton = styled.button``
import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 1200px;
	border: 1px solid black;
	margin: 100px;
	padding-top: 80px;
	padding-bottom: 100px;
	padding-left: 102px;
	padding-right: 102px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 36px;
	font-weight: bold;
`;

export const WriterWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 40px;
`;

export const Writer = styled.input`
	width: 486px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
	width: 486px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
	padding-bottom: 16px;
	font-size: 16px;
	font-weight: 500;
`;

export const InputWrapper = styled.div`
	padding-top: 40px;
`;

export const Subject = styled.input`
	width: 996px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
	width: 996px;
	height: 480px;
	padding-left: 16px;
	padding: 14px;
	border: 1px solid #bdbdbd;
`;

export const CodeWrapper= styled.div`
	display: flex;
	flex-direction: row;
`;

export const Code = styled.input`
	width: 77px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const SearchCode = styled.button`
	width: 124px;
	height: 52px;
	margin-left: 16px;
	background-color: black;
	cursor: pointer;
	color: white;
`;

export const Address = styled.input`
	width: 996px;
	height: 52px;
	margin-top: 16px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
	width: 996px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
	width: 996px;
	padding-top: 40px;
`;

export const UploadButton = styled.button`
	width: 78px;
	height: 78px;
	background-color: #bdbdbd;
	margin-right: 24px;
	outline: none;
	border: none;
	cursor: pointer;
`;

export const OptionWrapper = styled.div`
	width: 996px;
	padding-top: 40px;
`;

export const RadioButton = styled.input`
	cursor: pointer;
`;

export const RadioLabel = styled.label`
	margin-left: 8px;
	margin-right: 20px;
	font-weight: 500;
	cursor: pointer;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-top: 80px;
`;

export const SubmitButton = styled.button`
	width: 179px;
	height: 52px;
	border: none;
	font-size: 16px;
	font-weight: 500;
	margin-left: 12px;
	margin-right: 12px;
	cursor: pointer;
`;
export const Error = styled.div `
	padding-top: 10px;
	font-size: 14px;
	color: red;
`;