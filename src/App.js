import { useEffect } from 'react'
import { getTokenFromUrl } from './config'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './app/dataLayer'

import { Login, Player } from './pages'

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token)
      ;(async () => {
        const user = await spotify.getMe()

        dispatch({
          type: 'SET_USER',
          user,
        })
      })()
      ;(async () => {
        const playlists = await spotify.getUserPlaylists()

        console.log(playlists)
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        })
      })()
      ;(async () => {
        const playlist = await spotify.getPlaylist('37i9dQZEVXcSZQVhysfpxB')

        console.log(playlist)
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: playlist,
        })
      })()
    }
  }, [])

  return <div className='app'>{token ? <Player spotify={spotify} /> : <Login />}</div>
}

export default App
