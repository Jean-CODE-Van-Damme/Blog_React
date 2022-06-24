import Item from "./Item";

const MainContent = (props) => {
  return (
    <>
      <div className="first__item">
        <Item
          first_title={"Formation Yoda"}
          subtitle={"Master 2 en Sabre Laser"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      <div className="second__item">
        <Item
          first_title={"Experiences au sein de la Galaxy"}
          subtitle={"Formation à l'eveil de la force"}
          description={
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
      </div>
    </>
  );
};

export default MainContent;
