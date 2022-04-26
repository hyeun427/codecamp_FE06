import { useRouter } from "next/router";

export default function ProductListUI() {
  const router = useRouter();

  const onClickUpload = () => {
    router.push("/products/new");
  };

  return (
    <>
      <div>상품목록페이지</div>
      <button onClick={onClickUpload}>상품등록하기</button>
    </>
  );
}
