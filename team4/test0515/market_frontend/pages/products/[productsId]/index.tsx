import useAuth from "../../../src/components/commons/hooks/useAuth";
import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.container";
import ProductContactList from "../../../src/components/units/contact/list/ProductContactList.container";
import ProductContactWrite from "../../../src/components/units/contact/write/ProductContactWrite.container";

export default function ProductsPage() {
  useAuth();
  return (
    <>
      <ProductDetail />;
      <ProductContactWrite />
      <ProductContactList />
    </>
  );
}
