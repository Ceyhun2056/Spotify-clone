# Spotify Clone - Music Streaming Web App

A modern, responsive music streaming web application built with vanilla HTML, CSS, and JavaScript. This Spotify-inspired clone features a clean dark theme, playlist management, search functionality, and integration with free music APIs.

## 🎵 Features

### Core Functionality
- **Modern UI**: Spotify-inspired dark theme with smooth animations and transitions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Music Player**: Full-featured player with play/pause, next/previous, shuffle, repeat, and volume controls
- **Progress Bar**: Interactive progress bar with seek functionality
- **Search**: Dynamic search functionality with filters for songs, artists, and albums
- **Playlists**: Create, manage, and play custom playlists (stored locally)
- **Favorites**: Like and save favorite tracks
- **Lyrics**: Display song lyrics in a modal (with API integration)

### User Interface
- **Sidebar Navigation**: Home, Search, Library sections with playlist management
- **Top Navigation**: Back/forward buttons, search bar, and user profile
- **Content Grid**: Responsive grid layout for songs, albums, and playlists
- **Context Menus**: Right-click options for tracks and playlists
- **Toast Notifications**: User feedback for actions
- **Modal Dialogs**: Create playlists and view lyrics

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/spotify-clone.git
   cd spotify-clone
   ```

2. **Open with a local server:**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js (with live-server):
   ```bash
   npx live-server
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser:**
   Navigate to `http://localhost:8000`

## 📁 Project Structure

```
spotify-clone/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── app.js              # Core JavaScript functionality
├── sw.js               # Service Worker for offline support
├── assets/             # Static assets
│   └── icons/          # App icons and images
├── README.md           # Project documentation
└── LICENSE            # License file
```

## 🔧 Configuration

### API Integration

The app is designed to work with several free APIs for music metadata and streaming:

#### 1. Spotify Web API (Free Tier)
- **Purpose**: Metadata, album art, 30-second previews
- **Setup**:
  1. Create a Spotify Developer account
  2. Create an app to get Client ID and Secret
  3. Add credentials to `app.js`

```javascript
const SPOTIFY_CONFIG = {
    clientId: 'your_spotify_client_id',
    clientSecret: 'your_spotify_client_secret'
};
```

#### 2. Jamendo API (Free Music)
- **Purpose**: Free Creative Commons music for full playback
- **Setup**:
  1. Register at Jamendo Developer
  2. Get API key
  3. Add to configuration

```javascript
const JAMENDO_CONFIG = {
    clientId: 'your_jamendo_client_id'
};
```

#### 3. Genius Lyrics API
- **Purpose**: Song lyrics
- **Setup**:
  1. Create Genius account
  2. Get access token
  3. Configure in app

```javascript
const GENIUS_CONFIG = {
    accessToken: 'your_genius_access_token'
};
```

#### 4. Alternative APIs
- **MusicBrainz**: Free metadata (no key required)
- **Lyrics.ovh**: Free lyrics API
- **Last.fm**: Music metadata and recommendations

### Environment Setup

Create a `config.js` file (not tracked in git):

```javascript
const CONFIG = {
    spotify: {
        clientId: 'your_spotify_client_id',
        clientSecret: 'your_spotify_client_secret'
    },
    jamendo: {
        clientId: 'your_jamendo_client_id'
    },
    genius: {
        accessToken: 'your_genius_access_token'
    }
};
```

## 🎮 Usage

### Basic Navigation
- **Home**: Browse featured playlists, trending songs, and recommendations
- **Search**: Search for songs, artists, and albums
- **Library**: Access your playlists and favorite songs

### Music Player Controls
- **Play/Pause**: Space bar or click play button
- **Next/Previous**: Arrow keys or navigation buttons
- **Volume**: Use volume slider or mouse wheel over volume icon
- **Seek**: Click anywhere on progress bar
- **Shuffle**: Randomize playlist order
- **Repeat**: Toggle repeat modes (off/all/one)

### Playlist Management
- **Create**: Click the + button in sidebar
- **Add Songs**: Right-click on tracks and select "Add to Playlist"
- **Play**: Click play button on playlist cards
- **Delete**: Right-click playlist and select delete

### Keyboard Shortcuts
- `Space`: Play/Pause
- `→`: Next track
- `←`: Previous track
- `↑/↓`: Volume up/down
- `S`: Toggle shuffle
- `R`: Toggle repeat
- `L`: Show lyrics
- `/`: Focus search

## 🛠️ Development

### Code Structure

#### HTML (`index.html`)
- Semantic HTML5 structure
- Accessible navigation and controls
- Modal dialogs for user interactions
- Audio element for music playback

#### CSS (`styles.css`)
- CSS Custom Properties for theming
- Flexbox and Grid for layouts
- Responsive design with media queries
- Smooth animations and transitions
- Dark theme inspired by Spotify

#### JavaScript (`app.js`)
- ES6+ modern JavaScript
- Class-based architecture
- Event-driven programming
- Local storage for data persistence
- Modular API integration

### Key Classes and Methods

#### SpotifyClone Main Class
```javascript
class SpotifyClone {
    constructor()           // Initialize app
    navigateToPage()        // Handle navigation
    playTrack()            // Play individual tracks
    playPlaylist()         // Play playlist
    searchTracks()         // Search functionality
    createPlaylist()       // Playlist management
    togglePlay()           // Play/pause control
    updatePlayerUI()       // Update interface
}
```

#### API Integration Classes
```javascript
class SpotifyAPI {
    getAccessToken()       // OAuth authentication
    searchTracks()         // Search Spotify catalog
    getTrackDetails()      // Get metadata
}

class JamendoAPI {
    searchTracks()         // Search free music
    getPopularTracks()     // Get trending
}

class GeniusAPI {
    searchSong()           // Find lyrics
    getLyrics()            // Fetch lyrics
}
```

## 🎨 Customization

### Theming
Modify CSS custom properties in `:root` to change colors:

```css
:root {
    --primary-color: #1db954;      /* Spotify green */
    --background-color: #121212;    /* Dark background */
    --surface-color: #181818;       /* Card backgrounds */
    --text-primary: #ffffff;        /* Primary text */
    --text-secondary: #b3b3b3;      /* Secondary text */
}
```

### Adding New Features
1. **Equalizer**: Add audio context and filters
2. **Social Features**: Share playlists, follow friends
3. **Podcasts**: Extend to support podcast playback
4. **Offline Mode**: Cache tracks for offline listening
5. **Visualizer**: Add audio visualization

## 📱 Mobile Experience

The app is fully responsive and provides:
- Touch-friendly controls
- Swipe gestures (can be added)
- Mobile-optimized layout
- Progressive Web App capabilities

### PWA Features
- Service Worker for caching
- Offline functionality
- App-like experience
- Fast loading times

## 🔒 Privacy & Legal

### Important Notes
- **No Premium Features**: Only uses free APIs and 30-second previews
- **Local Storage**: User data stored locally, not on servers
- **API Compliance**: Follows all API terms of service
- **Copyright**: Respects music licensing and fair use

### Licensing
This project is for educational purposes. When using with real APIs:
- Comply with API rate limits
- Respect copyright laws
- Follow platform terms of service
- Consider user privacy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

### Development Guidelines
- Follow ES6+ JavaScript standards
- Use semantic HTML and accessible design
- Maintain responsive design principles
- Write clean, commented code
- Test on multiple browsers and devices

## 🐛 Troubleshooting

### Common Issues

**Audio not playing:**
- Check browser audio permissions
- Verify API URLs and keys
- Ensure HTTPS for production

**API requests failing:**
- Check network connection
- Verify API credentials
- Check CORS configuration

**Responsive issues:**
- Test on different screen sizes
- Check CSS media queries
- Validate HTML structure

## 📈 Performance Optimization

- Service Worker caching
- Image lazy loading
- Debounced search input
- Virtual scrolling for large lists
- CSS animations with GPU acceleration

## 🔮 Future Enhancements

- [ ] Real-time collaboration on playlists
- [ ] AI-powered music recommendations
- [ ] Social features and user profiles
- [ ] Advanced audio effects and equalizer
- [ ] Podcast and audiobook support
- [ ] Cross-device synchronization
- [ ] Voice control integration
- [ ] Music visualization and themes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Spotify for design inspiration
- Font Awesome for icons
- Various music APIs for data access
- Open source community for tools and libraries

---

**Note**: This is a demonstration project for educational purposes. For production use, ensure proper licensing, API compliance, and user data protection.