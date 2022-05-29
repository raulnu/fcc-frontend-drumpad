export default function Pad(props) {
  const { pad, setDisplayText } = props;
  const sound = new Audio(pad.url);

  const handleClick = (e) => {
    e.preventDefault();
    sound.play();
    setDisplayText(pad.id);
  };

  return (
    <li className="drum-pad col-4 mt-4 text-center">
      <button
        type="button"
        className="pad-button btn btn-primary"
        id={pad.id}
        onClick={handleClick}
      >
        {pad.keyTrigger}
      </button>
    </li>
  );
}
