import styled from "styled-components";
import Contact from "./components/Contact";
import SectionOne from "./components/SectionOne";
import Who from "./components/Who";
import Works from "./components/Works";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Footer from "./components/footer";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <SectionOne />
      <SectionTwo/>
      <SectionThree/>
      <Footer/>
      {/* <Who />
      <Works />
      <Contact /> */}
    </Container>
  );
}

export default App;
