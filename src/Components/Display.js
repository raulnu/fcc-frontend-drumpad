export default function Display(props) {
  const { displayText } = props;
  return (
    <div className="display col-4 align-self-center">
      <pre className="displayer bg-light text-center h3 p-3 rounded border border-dark">
        {displayText}
      </pre>
    </div>
  );
}
