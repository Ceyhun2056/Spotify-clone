// Configuration file for API keys and settings
// Copy this file to config.js and add your actual API keys

const CONFIG = {
    // Spotify Web API Configuration
    spotify: {
        clientId: 'your_spotify_client_id_here',
        clientSecret: 'your_spotify_client_secret_here',
        redirectUri: window.location.origin,
        scopes: 'user-read-private user-read-email playlist-read-private'
    },

    // Jamendo API Configuration (Free Creative Commons Music)
    jamendo: {
        clientId: 'your_jamendo_client_id_here',
        baseUrl: 'https://api.jamendo.com/v3.0'
    },

    // Genius Lyrics API Configuration
    genius: {
        accessToken: 'your_genius_access_token_here',
        baseUrl: 'https://api.genius.com'
    },

    // Last.fm API Configuration (Alternative metadata source)
    lastfm: {
        apiKey: 'your_lastfm_api_key_here',
        baseUrl: 'https://ws.audioscrobbler.com/2.0/'
    },

    // MusicBrainz API Configuration (Free, no key required)
    musicbrainz: {
        baseUrl: 'https://musicbrainz.org/ws/2'
    },

    // Lyrics.ovh API Configuration (Free lyrics, no key required)
    lyricsOvh: {
        baseUrl: 'https://api.lyrics.ovh/v1'
    },

    // App Settings
    app: {
        name: 'Spotify Clone',
        version: '1.0.0',
        maxSearchResults: 20,
        maxPlaylistLength: 100,
        autoplay: false,
        defaultVolume: 0.5,
        enableServiceWorker: true
    }
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// API Setup Instructions:

/*
1. SPOTIFY WEB API SETUP:
   - Go to https://developer.spotify.com/dashboard
   - Create a new app
   - Copy Client ID and Client Secret
   - Add your domain to redirect URIs
   - Free tier includes: metadata, 30-second previews, album art

2. JAMENDO API SETUP:
   - Go to https://developer.jamendo.com/
   - Register for free account
   - Create an application
   - Copy the Client ID
   - Provides: Full Creative Commons music tracks

3. GENIUS LYRICS API SETUP:
   - Go to https://genius.com/api-clients
   - Create a new API client
   - Generate access token
   - Copy the access token
   - Provides: Song lyrics and metadata

4. LAST.FM API SETUP (Optional):
   - Go to https://www.last.fm/api/account/create
   - Register for API account
   - Copy the API key
   - Provides: Music metadata, recommendations, scrobbling

5. NO SETUP NEEDED:
   - MusicBrainz: Free music metadata
   - Lyrics.ovh: Free lyrics API
*/
