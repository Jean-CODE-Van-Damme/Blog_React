import MainContent from "./MainContent";
import SideContent from "./SideContent";

const Content = (props) => {
  return (
    <>
      <div className="content">
        <div className="main__content">
          <MainContent />
        </div>

        <div className="side__content">
          <SideContent />
        </div>
      </div>
    </>
  );
};

export default Content;
