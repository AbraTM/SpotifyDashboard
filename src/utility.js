import axios from "axios"
 
const getAccessToken = async() => {
    const credentials = {
        clientID : "fd53840822ef4377a780b20317fc20c5",
        clientSecret : "e797e28eb45d40aabd366a822d74a151"
    }
    
    const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
        'grant_type': 'client_credentials'
    }), {
        headers: {
            'Authorization': 'Basic ' + `${btoa(credentials.clientID + ':' + credentials.clientSecret)}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const accessToken = response.data.access_token
    return accessToken
}

const getTopFiftyDaily = async () => {
    const accessToken = await getAccessToken()
    const playlistID = '37i9dQZEVXbLZ52XmnySJg'
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
        }
    })
    const data = response.data.tracks
    return data
}

const getTopFiftyWeekly = async () => {
    const accessToken = await getAccessToken()
    const playlistID = '37i9dQZEVXbMWDif5SCBJq'
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistID}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
        }
    })
    const data = response.data.tracks
    return data
}




export { getTopFiftyDaily, getTopFiftyWeekly }

