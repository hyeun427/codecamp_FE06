import { Pagination } from "antd";

export default function PaginationAntd() {
  return (
    {new Array(10).fill(1).map((el) => (
  <Pagination defaultCurrent={1} total={50} />
      ))
    }
  )
}