import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  // formState.isSubmitting은 클릭 한번에 광클 시 한번마 실행하게 해줌
  const { register, handleSubmit, formState } = useForm();

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <input type="text" {...register("contents")} />
      <br />
      <button disabled={formState.isSubmitting}>등록하기</button>
    </form>
  );
}
