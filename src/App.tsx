import { Header } from "components/header/Header";
import MainArea from "components/mainArea/MainArea";
import Thumbnail from "components/thumbnail/Thumbnail";

function App() {
  return (
    <>
      <Header />
      <MainArea>
        <Thumbnail />
      </MainArea>
    </>
  );
}

export default App;
