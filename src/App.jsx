import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);
  const [packedItems, setPackedItems] = useState(0);

  useEffect(() => {
    const checkedItems = items.filter((item) => item.checked);
    setPackedItems(checkedItems.length);
  }, [items]);

  return (
    <div>
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} packedItems={packedItems} />
    </div>
  );
}

export default App;
