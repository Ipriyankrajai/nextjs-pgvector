import SearchContainer from "./search/search-container";
import Wrapper from "./wrapper";

export default function Home() {
  return (
    <Wrapper>
      <h1 className="text-2xl font-bold text-center my-5">Heros</h1>
      <SearchContainer />
    </Wrapper>
  );
}
