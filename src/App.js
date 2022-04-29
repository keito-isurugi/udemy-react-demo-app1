import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <PrimaryButton>検索</PrimaryButton>
      <SecondaryButton>hoge</SecondaryButton>
      <br />
      <SearchInput></SearchInput>
      <UserCard></UserCard>
    </div>
  );
}
