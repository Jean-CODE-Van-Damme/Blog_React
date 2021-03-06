import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";
import ItemSubtitle from "./ItemSubtitle";

const Item = (props) => {
  return (
    <>
      <ItemTitle first_title={props.first_title} />
      <ItemSubtitle subtitle={props.subtitle} />
      {/* <div className="picture"> */}
      <div className="yoda_force">
        <ItemPicture image={props.image} />
        {/* </div> */}
      </div>
      <ItemDescription description={props.description} />
    </>
  );
};

export default Item;
