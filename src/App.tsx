import ScrollTriggeredBox from "./component/FixedBox";
import styled from "styled-components";

const PageSection = styled.div<{ bgColor: string }>`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: ${(props) => props.bgColor};
`;

function App() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A0", "#A033FF"];

  return (
    <div>
      <ScrollTriggeredBox />
      {colors.map((color, index) => (
        <PageSection key={index} bgColor={color}>
          Page {index + 1}
        </PageSection>
      ))}
      {/* <Roadmap /> */}
    </div>
  );
}

export default App;
