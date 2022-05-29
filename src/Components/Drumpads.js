import Pad from "./Pad";
export default function Drumpads(props) {
  const { drumpads, setDisplayText } = props;

  return (
    <div
      className="drumpads col-4 bg-light rounded p-4 pt-0 border border-dark"
      id="drum-machine"
    >
      <ul className="row">
        {drumpads.map((pad) => {
          return (
            <Pad key={pad.keyCode} pad={pad} setDisplayText={setDisplayText} />
          );
        })}
      </ul>
    </div>
  );
}
