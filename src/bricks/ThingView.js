import ThingItem from "./ThingItem";

function ThingList(props) {
  return (
    <>
      {
        props.things.map(th => {
          return (
              <ThingItem thing={th} />
          )
        })
      }
    </>
  );
}

export default ThingList;
