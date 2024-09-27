import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navlink = styled(Link)`
  text-decoration: none;
  :hover {
    font-weight: 700;
  }
`;

export const StyleCon = styled.div`
  margin-left: 220px;
  .AlignCon {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .IdCon {
    width: 50px;
  }
  @media only screen and (max-width: 900px) {
    margin-left: 0px;
  }
`;

export const ModalButton = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  .FixCon {
    width: 144px;
    height: 32px !important;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const DetailStyle = styled.div`
  margin-left: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  @media only screen and (max-width: 900px) {
    margin-left: 0px;
    width: 70%;
    height: 900px;
  }
`;
