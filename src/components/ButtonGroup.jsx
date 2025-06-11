import Button from "./Button";
import { secondaryButtons } from "../lib/constants";
export default function ButtonGroup({handleClicks}) {
  return (
    <section className="button-group">
        {secondaryButtons.map(((text,index )=>  <Button key={index} type="secondary" text={text} handleClicks={handleClicks} />
        ))
        }

    </section>
  )
}
