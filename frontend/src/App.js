import React, { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./img/bg.jpg";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";
import { Helmet } from "react-helmet";

function App() {
  const [active, setActive] = useState(1);
  const [modal, setModal] = useState(false);

  const { setSelectedId } = useGlobalContext();
  // console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Income />;
      case 3:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      <Helmet>
        <title>Expense Tracker</title>
      </Helmet>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} setModal={setModal} />

        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.4);
    box-shadow: 0px 1px 15px rgba(0, 0, 255, 0.3);
    border: transparent;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
