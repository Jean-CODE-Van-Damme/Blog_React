import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = (props) => {
  return (
    <>
      <ItemTitle first_title={props.first_title} />

      <div className="vador">
        <ItemPicture image={props.image} />
      </div>
      <ItemDescription description={props.description} />
    </>
  );
};

export default AboutMe;
