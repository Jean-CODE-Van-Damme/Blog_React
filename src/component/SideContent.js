import AboutMe from "./AboutMe";

const SideContent = (props) => {
  return (
    <>
      <div className="about__me">
        <AboutMe
          first_title={"Eclater Dark-Vador au combat de poucec"}
          description={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
        />
      </div>
    </>
  );
};

export default SideContent;
