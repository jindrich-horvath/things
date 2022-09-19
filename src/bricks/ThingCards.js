import ThingCardItem from "./ThingCardItem";

function ThingCards(props) {
  return (
    <div className="d-flex flex-column gap-3 align-items-center">
      {
        props.things.map((th, i) => {
          return (
              <ThingCardItem key={i} thing={th} />
          )
        })
      }
    </div>
  );
}

export default ThingCards;
