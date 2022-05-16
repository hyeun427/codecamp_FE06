import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const MapContainer = styled.div`
  width: 390px;
  height: 250px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EmptyMap = styled.div`
  width: 390px;
  height: 250px;
  padding:  110px;
  text-align: center;
  border: 1px dotted gray;
`

export const ContainerLeft = styled.div`
  margin-right: 20px;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  width: 900px;

  & > span {
    width: 100%;
  }

  & > input {
    width: 100%;
    height: 50px;
    margin: 15px 0px;
    background: #E9E9E9;
    border: 1px solid #BDBDBD;
  }
`;

export const AddressHead = styled.div`
  width: 100%;
  display: flex;
  
  align-items: center;
  padding: 10px 0;
`;

export const Input = styled.div`
  width: 77px;
  height:42px;
  border: 1px solid #BDBDBD;
  color: #BDBDBD;
`

export const SearchAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 5px 10px;
  width: 125px;
  height: 50px;
  background: #000000;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background: purple;
  }
`;
