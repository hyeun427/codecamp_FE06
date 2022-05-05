// 상품 수정 페이지

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import useAuth from "../../../../src/components/commons/hooks/useAuth";
import { FETCH_USED_ITEM } from "../../../../src/components/units/product/detail/ProductDetail.queries";
import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.container";

export default function ProductEditPage() {
  useAuth();
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productsId },
  });

  return <ProductWrite isEdit={true} data={data} />;
}
