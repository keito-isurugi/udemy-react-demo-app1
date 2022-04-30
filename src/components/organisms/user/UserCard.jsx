import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/yUu4hy7nw5c"
        alt="プロフィール"
      />
      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>mail@email.com</dd>
        <dt>TEL</dt>
        <dd>111-11111-1111</dd>
        <dt>会社名</dt>
        <dd>ほげほげ</dd>
        <dt>WEB</dt>
        <dd>google.com</dd>
      </SDl>
    </div>
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
  }
`;
