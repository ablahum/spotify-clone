import { Sidebar, Body, Footer } from '../../components'
import './player.css'

const Player = ({ spotify }) => {
  return (
    <div className='player'>
      <div className='player-body'>
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  )
}

export default Player
