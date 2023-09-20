import PropTypes from 'prop-types'

TextForm.prototype = {
    tvalue: PropTypes.string,
    setValue: PropTypes.func,
    label: PropTypes.string
}

export default function TextForm(prop) {
    return (
        <div>
        <label htmlFor={prop.label}>{prop.label}</label>
        <input type="text" id={prop.label} name={prop.label}
          value={prop.value}
          onChange={(ev)=> prop.setValue(ev.target.value)}
        />
      </div>
    )
}