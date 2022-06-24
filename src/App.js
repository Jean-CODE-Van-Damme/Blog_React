import "./App.css";
import Header from "./component/Header";
import NavigationMenu from "./component/NavigationMenu";
import Content from "./component/Content";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <div className="body">
        <div className="container">
          <Header
            title={"My Blog"}
            baseline={"Comment devenir un Jedi en 3 Etapes"}
          />
          <NavigationMenu link={"Link"} />
          <Content />
          <Footer end={"Made with React at Le reacteur By Olivier Reverseau"} />
        </div>
      </div>
    </>
  );
};

export default App;
