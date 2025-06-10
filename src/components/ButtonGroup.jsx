import Button from "./Button";
const secondaryButtons = ["Mark All as complete", "Mark All as incomplete", "Reset to Initial", "Remove all items"];
export default function ButtonGroup() {
  return (
    <section className="button-group">
        {secondaryButtons.map(((text,index )=> <Button key={index} type="secondary" text={text} />
        ))
        }

    </section>
  )
}
