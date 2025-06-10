import Button from "./Button";

export default function ButtonGroup() {
    const secondaryButtons = ["Mark All as complete", "Mark All as incomplete", "Reset to Initial", "Remove all items"];
  return (
    <section className="button-group">
        {secondaryButtons.map(((text,index )=> <Button key={index} type="secondary" text={text} />
        ))
        }

    </section>
  )
}
