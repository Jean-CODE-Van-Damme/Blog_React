// import yoda from "../img/yoda.jpeg";
// import force from "../img/force.jpeg";

const ItemPicture = (props) => {
  console.log(props.image);
  return <img src={props.image} alt="photos" />;
};

export default ItemPicture;
