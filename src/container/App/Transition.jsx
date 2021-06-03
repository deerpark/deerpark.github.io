import Anime from 'react-anime'

const transition = {
  opacity: [0, 1],
  translateX: [30, 0],
  easing: 'easeOutExpo',
}

export default function Transition(props) {
  return <Anime {...transition} {...props} />
}
