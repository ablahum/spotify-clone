import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useDataLayerValue } from '../../app/dataLayer'
import './header.css'

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue()

  return (
    <div className='header'>
      <div className='header-left'>
        <SearchIcon />
        <input placeholder='Search for Artists, Songs, or Podcasts' type='text' />
      </div>
      <div className='header-right'>
        <Avatar src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
