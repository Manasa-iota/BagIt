import Button from "./Button";
import { secondaryButtons } from "../lib/constants";
import { handleClicks } from "../stores/itemsStore";

export default function ButtonGroup() {
  // const handleClicks =useItemsStore(state=>state.handleClicks);
  return (
    <section className="button-group">
        {secondaryButtons.map(((text,index )=>  <Button key={index} type="secondary" text={text} onClick={() => handleClicks[text]?.()}/>
        ))
        }

    </section>
  )
}
