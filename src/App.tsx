import { FC, useState } from "react";
import LiveSearch from "./LiveSearch";

interface Props {}
const profiles = [
  { id: "1", name: "Allie Grater" },
  { id: "2", name: "Aida Bugg" },
  { id: "3", name: "Gabrielle" },
  { id: "4", name: "Grace" },
  { id: "5", name: "Hannah" },
  { id: "6", name: "Heather" },
  { id: "7", name: "John Doe" },
  { id: "8", name: "Anne Teak" },
  { id: "9", name: "Audie Yose" },
  { id: "10", name: "Addie Minstra" },
  { id: "11", name: "Anne Ortha" },
];

const App: FC<Props> = (props): JSX.Element => {
  const [results, setResults] = useState<{ id: string; name: string }[]>();
  const [selectedProfile, setSelectedProfile] = useState<{
    id: string;
    name: string;
  }>();

  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
  const handleChange: changeHandler = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = profiles.filter((profile) =>
      profile.name.toLowerCase().startsWith(target.value)
    );
    setResults(filteredValue);
  };
  return (
    <LiveSearch
      results={results}
      value={selectedProfile?.name}
      renderItem={(item) => <p>{item.name}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    />
  );
};

export default App;
