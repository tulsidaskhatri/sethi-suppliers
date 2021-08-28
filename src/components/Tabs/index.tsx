import "./Tabs.scss";

interface TabsProps {
  list: string[];
  current: number;
  onChange: (current: number) => void;
}

export const Tabs = ({ list, current, onChange }: TabsProps) => {
  return (
    <ul className="Tabs-list">
      {list.map((item, index) => (
        <li
          className="item"
          key={index}
          style={{ color: current === index ? "green" : "black" }}
          onClick={() => {
            current !== index && onChange(index);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
