import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProviders";

export const UserIconWithName = (props) => {
  const { user } = props;
  const { image, name } = user;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <Scontainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
