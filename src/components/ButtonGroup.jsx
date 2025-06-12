import Button from "./Button";
import { secondaryButtons } from "../lib/constants";
import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {handleClicks} =useItemsContext();
  return (
    <section className="button-group">
        {secondaryButtons.map(((text,index )=>  <Button key={index} type="secondary" text={text} onClick={handleClicks[text]} />
        ))
        }

    </section>
  )
}
