import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = (props) => {
  return (
    <>
      <ItemTitle first_title={props.first_title} />
      <div className="little_picture">
        <div className="vador">
          <ItemPicture image={props.image} />
        </div>
      </div>
      <ItemDescription description={props.description} />
    </>
  );
};

export default AboutMe;
