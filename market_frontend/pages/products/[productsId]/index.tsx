import useAuth from "../../../src/components/commons/hooks/useAuth";
import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.container";

export default function ProductsPage() {
  useAuth();
  return <ProductDetail />;
}
