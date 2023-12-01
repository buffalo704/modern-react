import {Button} from "../components/Button";
import {GoBell, GoAlert, GoDatabase} from "react-icons/go";

export const ButtonPage = () => {
  return ( <div>
    <div>
      <Button secondary outline rounded>
        <GoBell/>
        Click me!!
      </Button>
    </div>
    <div>
      <Button danger outline>
        <GoAlert/>
        Buy Now!
      </Button>
    </div>
    <div>
      <Button warning>
        <GoDatabase/>
        See Deal!</Button>
    </div>
    <div>
      <Button secondary outline>
        Hide Ads!
      </Button>
    </div>
    <div>
      <Button primary rounded>
        Something!
      </Button>
    </div>
  </div>);
}
