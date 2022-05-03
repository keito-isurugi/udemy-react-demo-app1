import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user, isAdmin } = props;
  const { mail, tel, company, web } = user;
  return (
    <Card>
      <UserIconWithName user={user} isAdmin={isAdmin}></UserIconWithName>
      <SDl>
        <dt>メール</dt>
        <dd>{mail}</dd>
        <dt>TEL</dt>
        <dd>{tel}</dd>
        <dt>会社名</dt>
        <dd>{company.name}</dd>
        <dt>WEB</dt>
        <dd>{web}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow: break-word;
  }
`;
