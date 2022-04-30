import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/atoms/layout/Footer";
import { DefaultLayout } from "./components/templates/DefaultLayout";

const user = {
  image: "https://source.unsplash.com/yUu4hy7nw5c",
  name: "keito",
  mail: "email@email.com",
  tel: "111-11111-1111",
  company: {
    name: "㈱ほげほげ"
  },
  web: "google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <PrimaryButton>検索</PrimaryButton>
        <SecondaryButton>hoge</SecondaryButton>
        <br />
        <SearchInput></SearchInput>
        <UserCard user={user}></UserCard>
      </DefaultLayout>
    </BrowserRouter>
  );
}
