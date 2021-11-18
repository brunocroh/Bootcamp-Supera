import './Components.css';

function Input(props) {
  return (
    <div className="component-input-container">
      <label className="component-input-label">{props.label}</label>
      <input
        className="component-input-input"
        value={props.value}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  )
}

export default Input
