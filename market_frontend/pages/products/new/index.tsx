import useAuth from "../../../src/components/commons/hooks/useAuth";
import ProductWrite from "../../../src/components/units/product/write/ProductWrite.container";

export default function ProductNewPage() {
  useAuth();
  return <ProductWrite isEdit={false} />;
}
