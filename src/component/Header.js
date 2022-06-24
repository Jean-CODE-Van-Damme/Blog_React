import Title from "./Title";
import Baseline from "./Baseline";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <Title title={props.title} />
        <Baseline baseline={props.baseline} />
      </div>
    </>
  );
};

export default Header;
