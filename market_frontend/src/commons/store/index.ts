import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

// export const isEditState = atom({
//   key: "isEditState",
//   default: false,
// });

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

// export const visitedPageState = atom({
//   key: "visitedPageSate",
//   default: "/visitedPage",
// });

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

// 장바구니 목록
export const basketstate = atom({
  key: "basket",
  default: [],
});

// 최근 본 상품 목록
export const watchListState = atom({
  key: "watchProductList",
  default: [],
});
