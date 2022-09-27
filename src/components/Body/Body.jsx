import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useDataLayerValue } from '../../app/dataLayer'
import './body.css'

import Header from '../Header'
import SongRow from '../SongRow'

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body-info'>
        <img src={discover_weekly?.images[0]?.url} alt='' />

        <div className='body-info-text'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className='body-songs'>
        <div className='body-icons'>
          <PlayCircleFilledIcon className='body-shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
