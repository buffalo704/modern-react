import {Accordion} from "../components/Accordion";

export interface Item {
  id: string;
  label: string;
  content: string;
}

export function AccordionPage() {
  const items: Item[] = [
    {
      id: 'lokiou',
      label: 'Can I use React on a project?',
      content: 'Biscuit toffee muffin wafer donut cookie lemon drops lollipop. Pudding apple pie tootsie roll gummies apple pie. Pudding gingerbread chocolate bar toffee muffin. Dessert danish chocolate toffee halvah. Brownie pudding cupcake toffee chocolate bar shortbread. Soufflé dragée croissant gummies liquorice cupcake.'
    },
    {
      id: 'mwerj',
      label: 'Can I use JavaScript on a project?',
      content: 'Fruitcake tart lollipop candy sugar plum. Ice cream bonbon marzipan tootsie roll powder jelly beans jelly biscuit danish. Pudding jelly-o candy toffee chocolate. Donut jujubes donut icing marzipan. Gummies cupcake lollipop tart macaroon pastry. Soufflé shortbread gummi bears toffee apple pie chocolate bar. Tootsie roll oat cake marzipan pudding biscuit bonbon jelly beans candy canes. Marzipan icing sweet lollipop croissant liquorice gingerbread. Icing fruitcake icing bear claw powder.'
    },
    {
      id: '0wepo',
      label: 'Can I use CSS on a project?',
      content: 'Brownie gingerbread pudding chocolate jujubes macaroon chocolate cake. Liquorice liquorice brownie powder sweet roll gummies dessert croissant. Jelly donut chocolate bar soufflé shortbread macaroon cake shortbread. Sweet liquorice jelly beans pudding fruitcake fruitcake croissant gummi bears. Dragée chocolate icing chocolate bar oat cake jelly-o toffee caramels. Muffin cookie cheesecake tiramisu pie jelly-o sesame snaps jujubes icing.'
    },
  ];


  return (
    <div>
      <Accordion items={items}></Accordion>
    </div>
  );
}
