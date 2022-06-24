import Link from "./Link";

const NavigationMenu = (props) => {
  return (
    <>
      <div className="nav">
        <div className="first_link">
          <Link link={props.link} />
          <Link link={props.link} />
          <Link link={props.link} />
        </div>

        <div className="last_link">
          <Link link={props.link} />
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;
