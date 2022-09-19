import ThingItem from "./ThingItem";

function ThingList(props) {
  return (
    <div className="d-flex flex-column gap-3 align-items-center">
      {
        props.things.map((th, i) => {
          return (
              <ThingItem key={i} thing={th} />
          )
        })
      }
    </div>
  );
}

export default ThingList;
