export default function BoardWrite() {
    const router = useRouter()
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [subject, setSubject] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD);

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        if (writer !== "") {
            setWriterError("")
        }
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
        if (password !== "") {
            setPasswordError("")
        }
    };

    const onChangeSubject = (event) => {
        setSubject(event.target.value);
        if (subject !== "") {
            setSubjectError("")
        }
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
        if (contents !== "") {
            setContentsError("")
        }
    };

    const onClickSubmit = async () => {
        if (writer === "") {
            setWriterError("작성자를 입력하세요.")
        }
        if (password === "") {
            setPasswordError("비밀번호를 입력하세요.")
        }
        if (subject === "") {
            setSubjectError("제목을 입력하세요.")
        }
        if (contents === "") {
            setContentsError("내용을 입력하세요.")
        }
        if (writer !== "" && password !== "" && subject !== "" && contents !== "") {
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: password,
                            title: subject,
                            contents: contents
                        }
                    }
                })
                console.log(result)
                console.log(result.data.createBoard._id)
                alert("게시물 등록에 성공하였습니다!")
                alert("상세 페이지로 이동합니다.")
                router.push(`/boards/${result.data.createBoard._id}`)
            } catch(error) {
            console.log(error.message)
            }
        }
    };
}