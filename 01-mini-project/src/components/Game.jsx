import PropsTypes from 'prop-types'

Game.propTypes = {
    id: PropsTypes.any,
    title: PropsTypes.string,
    cover: PropsTypes.string,
    onRemove: PropsTypes.func
}
export default function Game(props) {
    return (
        <div>
        <img src={props.cover} alt="" />
        <div>
          <h2>{props.title}</h2>
          <button onClick={props.onRemove}>Remover</button>
        </div>
      </div>
    )
}