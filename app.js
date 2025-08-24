// Spotify Clone Application
// Main JavaScript file handling all functionality

class MusicApp {
    constructor() {
        // State management
        this.currentPage = 'home';
        this.currentTrack = null;
        this.isPlaying = false;
        this.currentPlaylist = [];
        this.currentTrackIndex = 0;
        this.playlists = JSON.parse(localStorage.getItem('playlists')) || [];
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.isShuffled = false;
        this.repeatMode = 'none'; // 'none', 'one', 'all'
        this.volume = 0.5;
        
        // User authentication state
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.isLoggedIn = !!this.currentUser;
        
        // Audio management
        this.audioPlayer = document.getElementById('audioPlayer');
        this.audioPlayer.volume = this.volume;
        
        // Simple demo data (no external library)
        this.initDemoData();
        
        // Initialize the application
        this.init();
    }

    // Initialize demo data for the app
    initDemoData() {
        this.demoTracks = [
            {
                id: '1',
                title: 'Anti-Hero',
                subtitle: 'Taylor Swift',
                artist: 'Taylor Swift',
                album: 'Midnights',
                duration: '3:20',
                image: 'https://i1.sndcdn.com/artworks-PNgS1KVsDxfM-0-t500x500.jpg',
                genre: 'Pop',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Taylor_Swift_-_Anti-Hero_CeeNaija.com_.mp3'
            },
            {
                id: '2',
                title: 'Last Christmas',
                subtitle: 'Taylor Swift',
                artist: 'Taylor Swift',
                album: 'Holiday Collection',
                duration: '4:02',
                image: 'https://i1.sndcdn.com/artworks-pWsK2LEltuMI-0-t500x500.jpg',
                genre: 'Holiday Pop',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Taylor_Swift_-_Last_Christmas_CeeNaija.com_.mp3'
            },
            {
                id: '3',
                title: 'Midnight Rain',
                subtitle: 'Taylor Swift',
                artist: 'Taylor Swift',
                album: 'Midnights',
                duration: '2:54',
                image: 'https://i1.sndcdn.com/artworks-nCpzSBjExEcg-0-t1080x1080.jpg',
                genre: 'Pop',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Taylor_Swift_-_Midnight_Rain_CeeNaija.com_.mp3'
            },
            {
                id: '4',
                title: 'Snow On The Beach (Ft. Lana Del Rey)',
                subtitle: 'Taylor Swift',
                artist: 'Taylor Swift',
                album: 'Midnights',
                duration: '4:16',
                image: 'https://i1.sndcdn.com/artworks-PNgS1KVsDxfM-0-t500x500.jpg',
                genre: 'Pop',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Taylor_Swift_-_Snow_On_The_Beach_Ft_Lana_Del_Rey_CeeNaija.com_.mp3'
            },
            {
                id: '5',
                title: 'Sweet Nothing',
                subtitle: 'Taylor Swift',
                artist: 'Taylor Swift',
                album: 'Midnights',
                duration: '3:08',
                image: 'https://i1.sndcdn.com/artworks-pWsK2LEltuMI-0-t500x500.jpg',
                genre: 'Pop',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Taylor_Swift_-_Sweet_Nothing_CeeNaija.com_.mp3'
            },
            
            {
                id: '7',
                title: 'True Love',
                subtitle: 'Kanye West',
                artist: 'Kanye West',
                album: 'Donda 2',
                duration: '3:25',
                image: 'assets/icons/kanye-west-album-cover-5t9c3rplh12s4zut.jpg',
                genre: 'Hip Hop',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Kanye_West_-_True_love_CeeNaija.com_.mp3'
            },
            {
                id: '8',
                title: 'YOU & I (Ft. Khalid)',
                subtitle: 'Wanitwa Mos',
                artist: 'Wanitwa Mos',
                album: 'Single',
                duration: '3:52',
                image: 'assets/icons/download.jfif',
                genre: 'Afrobeats',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Wanitwa_Mos_-_YOU_I_Ft_Khalid_CeeNaija.com_.mp3'
            },
            {
                id: '9',
                title: 'DjaDja (feat. Loredana)',
                subtitle: 'Aya Nakamura',
                artist: 'Aya Nakamura feat. Loredana',
                album: 'Nakamura',
                duration: '2:56',
                image: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/25/d0/40/25d040cc-510f-912b-f5a1-2b1b6caf615a/190295329389.jpg/360x360bb.webp',
                genre: 'Pop',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Aya_Nakamura_feat._Loredana_-_Djadja_feat_Loredana_(SkySound.cc).mp3'
            },
            {
                id: '10',
                title: 'I Feel It Coming',
                subtitle: 'The Weeknd',
                artist: 'The Weeknd',
                album: 'Starboy',
                duration: '4:29',
                image: 'https://i1.sndcdn.com/artworks-kiRwQqvQ9Z58-0-t500x500.jpg',
                genre: 'R&B',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/The Weeknd - I Feel It Coming (192kbps).mp3'
            },
            {
                id: '11',
                title: 'Blinding Lights (Alternative)',
                subtitle: 'The Weeknd',
                artist: 'The Weeknd',
                album: 'After Hours',
                duration: '3:20',
                image: 'https://i1.sndcdn.com/artworks-mDGXphgISIkq-0-t500x500.jpg',
                genre: 'Synth Pop',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/The Weeknd - Blinding Lights (192kbps) (1).mp3'
            },
           
            {
                id: '13',
                title: 'Kırmızı',
                subtitle: 'Hande Yener',
                artist: 'Hande Yener',
                album: 'Hipnoz',
                duration: '4:12',
                image: 'https://mp3.big.az/artists_photo/221.jpg',
                genre: 'Turkish Pop',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Hande_Yener_-_Kirmizi_-_www.BiG.AZ.mp3'
            },
            {
                id: '14',
                title: 'Titanium (Acoustic)',
                subtitle: 'Sia',
                artist: 'Sia',
                album: '1000 Forms of Fear',
                duration: '4:05',
                image: 'https://images.genius.com/00495268ff2cb5447692a8c6365cd491.1000x1000x1.png',
                genre: 'Acoustic Pop',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Sia_-_Titanium_acoustic_(SkySound.cc).mp3'
            },
            {
                id: '15',
                title: 'Feel Invincible',
                subtitle: 'Skillet',
                artist: 'Skillet',
                album: 'Unleashed',
                duration: '3:58',
                image: 'https://images.genius.com/ee51fa88939b63d2b7f8f36fce4a257c.1000x1000x1.jpg',
                genre: 'Rock',
                type: 'track',
                audioSrc: 'https://ceyhun2056.github.io/music-links/music/Skillet_-_Feel_Invincible_(SkySound.cc).mp3'
            }
        ];

        this.demoPlaylists = [
            {
                id: 'playlist1',
                title: 'Featured Mix',
                subtitle: 'Popular songs',
                image: 'assets/icons/music.png',
                type: 'playlist',
                tracks: ['1', '9', '11', '7', '8', '12', '14', '15'] // Anti-Hero, DjaDja, Blinding Lights Alt, True Love, YOU & I, Don't Leave Me Lonely, Titanium, Feel Invincible
            },
            {
                id: 'playlist2',
                title: 'Chill Vibes',
                subtitle: 'Relaxing tunes',
                image: 'assets/icons/music.png',
                type: 'playlist',
                tracks: ['3', '4', '5', '2', '10', '13', '14'] // Midnight Rain, Snow On The Beach, Sweet Nothing, Last Christmas, I Feel It Coming, Kırmızı, Titanium Acoustic
            }
        ];

        this.demoGenres = [
            {
                id: 'pop',
                title: 'Pop',
                subtitle: 'Popular music',
                image: 'assets/icons/music.png',
                type: 'category'
            },
            {
                id: 'rock',
                title: 'Rock',
                subtitle: 'Rock music',
                image: 'assets/icons/music.png',
                type: 'category'
            }
        ];
    }

    // Initialize all event listeners and load initial content
    async init() {
        this.bindEvents();
        console.log('🎵 Music App: Using demo data (no external music library)');
        this.loadHomePage();
        this.updatePlaylistsUI();
        this.setupAudioEvents();
        this.updateAuthUI();
    }

    // Bind all event listeners
    bindEvents() {
        // Navigation events
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                this.navigateToPage(e.target.closest('[data-page]').dataset.page);
            });
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        searchInput.addEventListener('input', (e) => {
            if (e.target.value.trim()) {
                this.searchTracks(e.target.value);
            }
        });
        
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                this.searchTracks(query);
            }
        });

        // Player controls
        document.getElementById('playBtn').addEventListener('click', () => this.togglePlay());
        document.getElementById('prevBtn').addEventListener('click', () => this.previousTrack());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextTrack());
        document.getElementById('shuffleBtn').addEventListener('click', () => this.toggleShuffle());
        document.getElementById('repeatBtn').addEventListener('click', () => this.toggleRepeat());
        document.getElementById('favoriteBtn').addEventListener('click', () => this.toggleFavorite());
        document.getElementById('lyricsBtn').addEventListener('click', () => this.showLyrics());

        // Volume control
        const volumeSlider = document.getElementById('volumeSlider');
        volumeSlider.addEventListener('input', (e) => {
            this.setVolume(e.target.value / 100);
        });

        // Progress bar
        const progressBar = document.getElementById('progressBar');
        progressBar.addEventListener('click', (e) => {
            this.seekTo(e);
        });

        // Playlist management
        document.getElementById('createPlaylistBtn').addEventListener('click', () => {
            this.showCreatePlaylistModal();
        });
        
        document.getElementById('confirmCreatePlaylist').addEventListener('click', () => {
            this.createPlaylist();
        });

        // Modal management
        document.querySelectorAll('[data-modal]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Get the modal ID from the button or its parent
                const target = e.target.closest('[data-modal]');
                const modalId = target ? target.dataset.modal : null;
                
                console.log('Close button clicked for modal:', modalId);
                if (modalId) {
                    this.hideModal(modalId);
                }
            });
        });

        // Close modal when clicking outside
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    const modalId = overlay.id;
                    console.log('Clicked outside modal:', modalId);
                    this.hideModal(modalId);
                }
            });
        });

        // Close modal with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal-overlay:not(.hidden)');
                if (openModal) {
                    console.log('ESC pressed, closing modal:', openModal.id);
                    this.hideModal(openModal.id);
                }
            }
        });

        // Authentication events
        const signInBtn = document.getElementById('signInBtn');
        const signUpBtn = document.getElementById('signUpBtn');
        const signOutBtn = document.getElementById('signOutBtn');
        const profileBtn = document.getElementById('profileBtn');

        if (signInBtn) {
            signInBtn.addEventListener('click', () => {
                console.log('Sign In button clicked');
                this.showModal('signInModal');
            });
        } else {
            console.error('signInBtn element not found');
        }

        if (signUpBtn) {
            signUpBtn.addEventListener('click', () => {
                console.log('Sign Up button clicked');
                this.showModal('signUpModal');
            });
        } else {
            console.error('signUpBtn element not found');
        }

        if (signOutBtn) {
            signOutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.signOut();
            });
        }

        // Direct sign out button (backup)
        const directSignOutBtn = document.getElementById('directSignOutBtn');
        if (directSignOutBtn) {
            directSignOutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.signOut();
            });
        }

        if (profileBtn) {
            profileBtn.addEventListener('click', () => {
                this.showModal('profileModal');
                this.loadUserProfile();
            });
        }

        document.getElementById('profileAvatar').addEventListener('click', () => {
            this.toggleUserDropdown();
        });

        // Authentication form submissions
        document.getElementById('signInForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSignIn();
        });

        document.getElementById('signUpForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSignUp();
        });

        document.getElementById('forgotPasswordForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleForgotPassword();
        });

        document.getElementById('profileForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleProfileUpdate();
        });

        // Social authentication buttons
        document.getElementById('signInWithGoogle').addEventListener('click', () => {
            this.handleSocialSignIn('google');
        });

        document.getElementById('signUpWithGoogle').addEventListener('click', () => {
            this.handleSocialSignIn('google');
        });

        document.getElementById('signInWithFacebook').addEventListener('click', () => {
            this.handleSocialSignIn('facebook');
        });

        document.getElementById('signUpWithFacebook').addEventListener('click', () => {
            this.handleSocialSignIn('facebook');
        });

        document.getElementById('signInWithApple').addEventListener('click', () => {
            this.handleSocialSignIn('apple');
        });

        document.getElementById('signUpWithApple').addEventListener('click', () => {
            this.handleSocialSignIn('apple');
        });

        // Password toggle buttons
        document.getElementById('signInPasswordToggle').addEventListener('click', () => {
            this.togglePasswordVisibility('signInPassword', 'signInPasswordToggle');
        });

        document.getElementById('signUpPasswordToggle').addEventListener('click', () => {
            this.togglePasswordVisibility('signUpPassword', 'signUpPasswordToggle');
        });

        document.getElementById('confirmPasswordToggle').addEventListener('click', () => {
            this.togglePasswordVisibility('confirmPassword', 'confirmPasswordToggle');
        });

        // Real-time validation
        document.getElementById('signUpEmail').addEventListener('input', (e) => {
            this.validateEmail(e.target.value, 'signUpEmailError', 'signUpEmailSuccess');
        });

        document.getElementById('signUpPassword').addEventListener('input', (e) => {
            this.validatePassword(e.target.value);
            this.checkPasswordMatch();
        });

        document.getElementById('confirmPassword').addEventListener('input', () => {
            this.checkPasswordMatch();
        });

        document.getElementById('signUpName').addEventListener('input', (e) => {
            this.validateName(e.target.value);
        });

        // Forgot password link
        document.getElementById('forgotPasswordLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal('signInModal');
            this.showModal('forgotPasswordModal');
        });

        document.getElementById('backToSignIn').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal('forgotPasswordModal');
            this.showModal('signInModal');
        });

        // Switch between sign in and sign up
        document.getElementById('switchToSignUp').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal('signInModal');
            this.showModal('signUpModal');
        });

        document.getElementById('switchToSignIn').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal('signUpModal');
            this.showModal('signInModal');
        });

        // Click outside dropdown to close
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.user-dropdown')) {
                this.hideUserDropdown();
            }
        });

        // Search filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setSearchFilter(e.target.dataset.filter);
            });
        });

        // Library tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setLibraryTab(e.target.dataset.tab);
            });
        });
    }

    // Setup audio player event listeners
    setupAudioEvents() {
        this.audioPlayer.addEventListener('loadedmetadata', () => {
            this.updateDuration();
        });

        this.audioPlayer.addEventListener('timeupdate', () => {
            this.updateProgress();
        });

        this.audioPlayer.addEventListener('ended', () => {
            this.handleTrackEnd();
        });

        this.audioPlayer.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            this.showToast('Error playing track', 'error');
        });
    }

    // Authentication Methods
    updateAuthUI() {
        const authButtons = document.getElementById('authButtons');
        const userInfo = document.getElementById('userInfo');
        const username = document.getElementById('username');

        if (this.isLoggedIn && this.currentUser) {
            authButtons.classList.add('hidden');
            userInfo.classList.remove('hidden');
            username.textContent = this.currentUser.name || this.currentUser.email;
        } else {
            authButtons.classList.remove('hidden');
            userInfo.classList.add('hidden');
        }
    }

    handleSignIn() {
        const email = document.getElementById('signInEmail').value.trim();
        const password = document.getElementById('signInPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // Reset error messages
        this.clearFormErrors(['signInEmailError', 'signInPasswordError']);

        let isValid = true;

        // Validate email
        if (!email) {
            this.showFieldError('signInEmailError', 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(email)) {
            this.showFieldError('signInEmailError', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        if (!password) {
            this.showFieldError('signInPasswordError', 'Password is required');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Show loading state
        this.setButtonLoading('signInSubmitBtn', true);

        // Simulate API call delay
        setTimeout(() => {
            try {
                // Find user
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

                if (user) {
                    this.currentUser = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        bio: user.bio || '',
                        location: user.location || '',
                        joinDate: user.joinDate,
                        provider: user.provider || 'email'
                    };
                    this.isLoggedIn = true;

                    if (rememberMe) {
                        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                    }

                    this.setButtonLoading('signInSubmitBtn', false);
                    this.updateAuthUI();
                    this.hideModal('signInModal');
                    this.showToast(`Welcome back, ${this.currentUser.name}!`, 'success');
                    
                    // Reset form
                    document.getElementById('signInForm').reset();
                    this.clearFormErrors(['signInEmailError', 'signInPasswordError']);
                } else {
                    this.setButtonLoading('signInSubmitBtn', false);
                    this.showFieldError('signInPasswordError', 'Invalid email or password');
                }
            } catch (error) {
                this.setButtonLoading('signInSubmitBtn', false);
                this.showToast('An error occurred during sign in. Please try again.', 'error');
                console.error('Sign in error:', error);
            }
        }, 1500); // Simulate network delay
    }

    handleSignUp() {
        // Get form values
        const name = document.getElementById('signUpName').value.trim();
        const email = document.getElementById('signUpEmail').value.trim();
        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        const emailUpdates = document.getElementById('emailUpdates').checked;

        // Reset all error messages
        this.clearFormErrors(['signUpNameError', 'signUpEmailError', 'signUpPasswordError', 'confirmPasswordError', 'termsError']);

        let isValid = true;

        // Validate name
        if (!name) {
            this.showFieldError('signUpNameError', 'Full name is required');
            isValid = false;
        } else if (name.length < 2) {
            this.showFieldError('signUpNameError', 'Name must be at least 2 characters');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            this.showFieldError('signUpNameError', 'Name can only contain letters and spaces');
            isValid = false;
        }

        // Validate email
        if (!email) {
            this.showFieldError('signUpEmailError', 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(email)) {
            this.showFieldError('signUpEmailError', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        const passwordValidation = this.getPasswordStrength(password);
        if (!password) {
            this.showFieldError('signUpPasswordError', 'Password is required');
            isValid = false;
        } else if (passwordValidation.score < 3) {
            this.showFieldError('signUpPasswordError', 'Password is too weak. Please follow the requirements below.');
            isValid = false;
        }

        // Validate password confirmation
        if (!confirmPassword) {
            this.showFieldError('confirmPasswordError', 'Please confirm your password');
            isValid = false;
        } else if (password !== confirmPassword) {
            this.showFieldError('confirmPasswordError', 'Passwords do not match');
            isValid = false;
        }

        // Validate terms agreement
        if (!agreeTerms) {
            this.showFieldError('termsError', 'You must agree to the Terms of Service and Privacy Policy');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Show loading state
        this.setButtonLoading('signUpSubmitBtn', true);

        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
            this.setButtonLoading('signUpSubmitBtn', false);
            this.showFieldError('signUpEmailError', 'An account with this email already exists');
            return;
        }

        // Simulate API call delay
        setTimeout(() => {
            try {
                // Create new user
                const newUser = {
                    id: Date.now().toString(),
                    name: name,
                    email: email.toLowerCase(),
                    password: password, // In real app, this would be hashed
                    bio: '',
                    location: '',
                    emailUpdates: emailUpdates,
                    joinDate: new Date().toISOString(),
                    provider: 'email'
                };

                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // Auto sign in
                this.currentUser = {
                    id: newUser.id,
                    email: newUser.email,
                    name: newUser.name,
                    bio: newUser.bio,
                    location: newUser.location,
                    joinDate: newUser.joinDate,
                    provider: newUser.provider
                };
                
                this.isLoggedIn = true;
                localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

                this.setButtonLoading('signUpSubmitBtn', false);
                this.updateAuthUI();
                this.hideModal('signUpModal');
                this.showToast(`Welcome to Music App, ${this.currentUser.name}!`, 'success');
                
                // Reset form
                document.getElementById('signUpForm').reset();
                this.clearFormErrors(['signUpNameError', 'signUpEmailError', 'signUpPasswordError', 'confirmPasswordError', 'termsError']);
                
            } catch (error) {
                this.setButtonLoading('signUpSubmitBtn', false);
                this.showToast('An error occurred during registration. Please try again.', 'error');
                console.error('Sign up error:', error);
            }
        }, 1500); // Simulate network delay
    }

    signOut() {
        console.log('Sign out method called');
        
        // Stop any playing music
        if (this.audioPlayer) {
            this.audioPlayer.pause();
            this.isPlaying = false;
            this.updatePlayButton();
        }
        
        // Clear user data
        this.currentUser = null;
        this.isLoggedIn = false;
        localStorage.removeItem('currentUser');
        
        // Clear UI state
        this.updateAuthUI();
        this.hideUserDropdown();
        
        // Clear user-specific data
        this.playlists = [];
        this.favorites = [];
        this.updatePlaylistsUI();
        
        // Reset player
        this.currentTrack = null;
        this.updatePlayerUI();
        
        // Show success message
        this.showToast('You have been signed out', 'success');
        
        // Reload home page
        this.navigateToPage('home');
        
        console.log('Sign out completed');
    }

    loadUserProfile() {
        if (!this.currentUser) return;

        document.getElementById('profileName').value = this.currentUser.name || '';
        document.getElementById('profileEmail').value = this.currentUser.email || '';
        document.getElementById('profileBio').value = this.currentUser.bio || '';
        document.getElementById('profileLocation').value = this.currentUser.location || '';
    }

    handleProfileUpdate() {
        if (!this.currentUser) return;

        const name = document.getElementById('profileName').value;
        const bio = document.getElementById('profileBio').value;
        const location = document.getElementById('profileLocation').value;

        // Update current user
        this.currentUser.name = name;
        this.currentUser.bio = bio;
        this.currentUser.location = location;

        // Update in localStorage
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        // Update in users array
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], name, bio, location };
            localStorage.setItem('users', JSON.stringify(users));
        }

        this.updateAuthUI();
        this.hideModal('profileModal');
        this.showToast('Profile updated successfully', 'success');
    }

    toggleUserDropdown() {
        const dropdown = document.getElementById('dropdownMenu');
        const userInfo = document.getElementById('userInfo');
        
        // Make sure user is logged in and user info is visible
        if (!this.isLoggedIn || userInfo.classList.contains('hidden')) {
            console.log('User not logged in or user info hidden');
            // Show sign in modal instead
            this.showModal('signInModal');
            return;
        }
        
        dropdown.classList.toggle('show');
    }

    hideUserDropdown() {
        const dropdown = document.getElementById('dropdownMenu');
        dropdown.classList.remove('show');
    }

    showModal(modalId) {
        console.log('showModal called with:', modalId);
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            console.log('Modal shown:', modalId);
        } else {
            console.error('Modal not found:', modalId);
        }
    }

    // Form Validation Methods
    validateEmail(email, errorElementId, successElementId) {
        const errorElement = document.getElementById(errorElementId);
        const successElement = successElementId ? document.getElementById(successElementId) : null;
        
        if (!email) {
            this.hideFieldError(errorElementId);
            if (successElement) successElement.classList.add('hidden');
            return false;
        }

        if (!this.isValidEmail(email)) {
            this.showFieldError(errorElementId, 'Please enter a valid email address');
            if (successElement) successElement.classList.add('hidden');
            return false;
        }

        // Check if email is already taken (for sign up)
        if (errorElementId === 'signUpEmailError') {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
                this.showFieldError(errorElementId, 'This email is already registered');
                if (successElement) successElement.classList.add('hidden');
                return false;
            }
        }

        this.hideFieldError(errorElementId);
        if (successElement) successElement.classList.remove('hidden');
        return true;
    }

    validateName(name) {
        if (!name) return false;
        
        if (name.length < 2) {
            this.showFieldError('signUpNameError', 'Name must be at least 2 characters');
            return false;
        }
        
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            this.showFieldError('signUpNameError', 'Name can only contain letters and spaces');
            return false;
        }
        
        this.hideFieldError('signUpNameError');
        return true;
    }

    validatePassword(password) {
        const strength = this.getPasswordStrength(password);
        this.updatePasswordStrength(strength);
        this.updatePasswordRequirements(password);
        
        return strength.score >= 3;
    }

    checkPasswordMatch() {
        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (!confirmPassword) {
            this.hideFieldError('confirmPasswordError');
            document.getElementById('confirmPasswordSuccess').classList.add('hidden');
            return false;
        }
        
        if (password !== confirmPassword) {
            this.showFieldError('confirmPasswordError', 'Passwords do not match');
            document.getElementById('confirmPasswordSuccess').classList.add('hidden');
            return false;
        }
        
        this.hideFieldError('confirmPasswordError');
        document.getElementById('confirmPasswordSuccess').classList.remove('hidden');
        return true;
    }

    getPasswordStrength(password) {
        let score = 0;
        let feedback = [];

        if (!password) return { score: 0, feedback: ['Password is required'] };

        // Length check
        if (password.length >= 8) score += 1;
        else feedback.push('Use at least 8 characters');

        // Uppercase check
        if (/[A-Z]/.test(password)) score += 1;
        else feedback.push('Add uppercase letters');

        // Lowercase check
        if (/[a-z]/.test(password)) score += 1;
        else feedback.push('Add lowercase letters');

        // Number check
        if (/\d/.test(password)) score += 1;
        else feedback.push('Add numbers');

        // Special character check
        if (/[^A-Za-z0-9]/.test(password)) score += 1;

        return { score, feedback };
    }

    updatePasswordStrength(strength) {
        const strengthBar = document.querySelector('.strength-fill');
        const strengthText = document.querySelector('.strength-text');
        
        const percentage = (strength.score / 5) * 100;
        strengthBar.style.width = `${percentage}%`;
        
        let color, text;
        if (strength.score <= 1) {
            color = '#ff6b6b';
            text = 'Very weak';
        } else if (strength.score <= 2) {
            color = '#ff9f43';
            text = 'Weak';
        } else if (strength.score <= 3) {
            color = '#feca57';
            text = 'Fair';
        } else if (strength.score <= 4) {
            color = '#48dbfb';
            text = 'Good';
        } else {
            color = '#1dd1a1';
            text = 'Strong';
        }
        
        strengthBar.style.backgroundColor = color;
        strengthText.textContent = text;
        strengthText.style.color = color;
    }

    updatePasswordRequirements(password) {
        const requirements = [
            { id: 'lengthReq', test: password.length >= 8 },
            { id: 'upperReq', test: /[A-Z]/.test(password) },
            { id: 'lowerReq', test: /[a-z]/.test(password) },
            { id: 'numberReq', test: /\d/.test(password) }
        ];

        requirements.forEach(req => {
            const element = document.getElementById(req.id);
            if (req.test) {
                element.classList.add('met');
                element.querySelector('i').className = 'fas fa-check';
            } else {
                element.classList.remove('met');
                element.querySelector('i').className = 'fas fa-times';
            }
        });
    }

    togglePasswordVisibility(inputId, toggleId) {
        const input = document.getElementById(inputId);
        const toggle = document.getElementById(toggleId);
        
        if (input.type === 'password') {
            input.type = 'text';
            toggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            input.type = 'password';
            toggle.innerHTML = '<i class="fas fa-eye"></i>';
        }
    }

    handleSocialSignIn(provider) {
        // Show loading state
        const button = event.target.closest('.social-btn');
        const originalContent = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connecting...';
        button.disabled = true;

        // Simulate OAuth flow
        setTimeout(() => {
            // In a real app, you would integrate with actual OAuth providers
            // For demo purposes, create a mock user
            const mockUser = {
                id: Date.now().toString(),
                name: this.getMockNameForProvider(provider),
                email: `user@${provider}.com`,
                bio: '',
                location: '',
                joinDate: new Date().toISOString(),
                provider: provider
            };

            // Check if user exists or create new one
            const users = JSON.parse(localStorage.getItem('users')) || [];
            let existingUser = users.find(u => u.email === mockUser.email);
            
            if (!existingUser) {
                users.push(mockUser);
                localStorage.setItem('users', JSON.stringify(users));
                existingUser = mockUser;
            }

            // Sign in the user
            this.currentUser = {
                id: existingUser.id,
                email: existingUser.email,
                name: existingUser.name,
                bio: existingUser.bio,
                location: existingUser.location,
                joinDate: existingUser.joinDate,
                provider: existingUser.provider
            };
            
            this.isLoggedIn = true;
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

            // Reset button
            button.innerHTML = originalContent;
            button.disabled = false;

            // Update UI and close modal
            this.updateAuthUI();
            this.hideModal('signInModal');
            this.hideModal('signUpModal');
            this.showToast(`Welcome back via ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`, 'success');
            
        }, 2000);
    }

    getMockNameForProvider(provider) {
        const names = {
            google: 'John Doe',
            facebook: 'Jane Smith', 
            apple: 'Alex Johnson'
        };
        return names[provider] || 'User';
    }

    handleForgotPassword() {
        const email = document.getElementById('forgotEmail').value.trim();
        
        if (!email) {
            this.showFieldError('forgotEmailError', 'Email is required');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showFieldError('forgotEmailError', 'Please enter a valid email address');
            return;
        }

        // Show loading state
        this.setButtonLoading('forgotPasswordSubmitBtn', true);

        // Simulate sending reset email
        setTimeout(() => {
            this.setButtonLoading('forgotPasswordSubmitBtn', false);
            this.hideModal('forgotPasswordModal');
            this.showToast('Password reset instructions sent to your email!', 'success');
            document.getElementById('forgotPasswordForm').reset();
        }, 2000);
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFieldError(elementId, message) {
        const element = document.getElementById(elementId);
        element.textContent = message;
        element.classList.add('show');
    }

    hideFieldError(elementId) {
        const element = document.getElementById(elementId);
        element.classList.remove('show');
    }

    clearFormErrors(errorIds) {
        errorIds.forEach(id => {
            this.hideFieldError(id);
        });
    }

    setButtonLoading(buttonId, isLoading) {
        const button = document.getElementById(buttonId);
        const btnText = button.querySelector('.btn-text');
        const btnLoading = button.querySelector('.btn-loading');
        
        if (isLoading) {
            btnText.classList.add('hidden');
            btnLoading.classList.remove('hidden');
            button.disabled = true;
        } else {
            btnText.classList.remove('hidden');
            btnLoading.classList.add('hidden');
            button.disabled = false;
        }
    }

    // Navigation between pages
    navigateToPage(page) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        document.querySelector(`[data-page="${page}"]`).parentElement.classList.add('active');

        // Hide all pages
        document.querySelectorAll('.page-content').forEach(pageEl => {
            pageEl.classList.add('hidden');
        });

        // Show target page
        document.getElementById(`${page}Page`).classList.remove('hidden');

        // Load page content
        this.currentPage = page;
        this.loadPageContent(page);

        // Show/hide search container based on page
        const searchContainer = document.getElementById('searchContainer');
        if (page === 'search') {
            searchContainer.style.display = 'flex';
        } else {
            searchContainer.style.display = 'none';
        }
    }

    // Load content for specific pages
    loadPageContent(page) {
        switch (page) {
            case 'home':
                this.loadHomePage();
                break;
            case 'search':
                this.loadSearchPage();
                break;
            case 'library':
                this.loadLibraryPage();
                break;
        }
    }

    // Load home page content with featured music
    async loadHomePage() {
        try {
            // Load featured content from Spotify API or fallback to demo data
            await this.loadFeaturedContent();
            await this.loadTrendingContent();
            await this.loadRecommendations();
        } catch (error) {
            console.error('Error loading home page:', error);
        }
    }

    // Load featured content section
    async loadFeaturedContent() {
        const featuredGrid = document.getElementById('featuredGrid');
        featuredGrid.innerHTML = '<div class="loading">Loading featured content...</div>';
        
        try {
            // Use demo playlists
            const featuredItems = this.demoPlaylists;

            featuredGrid.innerHTML = featuredItems.map(item => this.createCardHTML(item)).join('');
            this.bindCardEvents(featuredGrid);
            
        } catch (error) {
            console.error('Error loading featured content:', error);
            featuredGrid.innerHTML = '<div class="error">Failed to load featured content</div>';
        }
    }

    // Load trending content section
    async loadTrendingContent() {
        const trendingGrid = document.getElementById('trendingGrid');
        trendingGrid.innerHTML = '<div class="loading">Loading trending tracks...</div>';
        
        try {
            // Use demo tracks
            const trendingItems = this.demoTracks;

            trendingGrid.innerHTML = trendingItems.map(item => this.createCardHTML(item)).join('');
            this.bindCardEvents(trendingGrid);
            
        } catch (error) {
            console.error('Error loading trending content:', error);
            trendingGrid.innerHTML = '<div class="error">Failed to load trending content</div>';
        }
    }

    // Load recommendations section
    async loadRecommendations() {
        const recommendationsGrid = document.getElementById('recommendationsGrid');
        recommendationsGrid.innerHTML = '<div class="loading">Loading recommendations...</div>';
        
        try {
            // Use all Taylor Swift tracks for recommendations
            const recommendedItems = this.demoTracks;

            recommendationsGrid.innerHTML = recommendedItems.map(item => this.createCardHTML(item)).join('');
            this.bindCardEvents(recommendationsGrid);
            
        } catch (error) {
            console.error('Error loading recommendations:', error);
            recommendationsGrid.innerHTML = '<div class="error">Failed to load recommendations</div>';
        }
    }

    // Search for tracks using demo data
    async searchTracks(query) {
        try {
            this.navigateToPage('search');
            
            const searchResultsGrid = document.getElementById('searchResultsGrid');
            searchResultsGrid.innerHTML = '<div class="loading">Searching...</div>';

            // Simple search in demo data
            const lowerQuery = query.toLowerCase();
            const allResults = [];
            
            // Search tracks
            this.demoTracks.forEach(track => {
                if (track.title.toLowerCase().includes(lowerQuery) || 
                    track.artist.toLowerCase().includes(lowerQuery) ||
                    track.album.toLowerCase().includes(lowerQuery)) {
                    allResults.push(track);
                }
            });
            
            // Search playlists
            this.demoPlaylists.forEach(playlist => {
                if (playlist.title.toLowerCase().includes(lowerQuery)) {
                    allResults.push(playlist);
                }
            });
            
            if (allResults.length > 0) {
                searchResultsGrid.innerHTML = allResults.map(item => this.createCardHTML(item)).join('');
                this.bindCardEvents(searchResultsGrid);
            } else {
                searchResultsGrid.innerHTML = '<div class="empty-state">No results found for "' + query + '"</div>';
            }

        } catch (error) {
            console.error('Search error:', error);
            document.getElementById('searchResultsGrid').innerHTML = '<div class="error">Search failed. Please try again.</div>';
        }
    }

    // Load search page
    loadSearchPage() {
        const searchResultsGrid = document.getElementById('searchResultsGrid');
        if (searchResultsGrid.children.length === 0) {
            searchResultsGrid.innerHTML = '<div class="empty-state">Start typing to search for music...</div>';
        }
    }

    // Load library page
    loadLibraryPage() {
        this.setLibraryTab('playlists');
    }

    // Set library tab content
    setLibraryTab(tab) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

        const libraryGrid = document.getElementById('libraryGrid');

        if (tab === 'playlists') {
            if (this.playlists.length === 0) {
                libraryGrid.innerHTML = '<div class="empty-state">No playlists yet. Create your first playlist!</div>';
            } else {
                libraryGrid.innerHTML = this.playlists.map(playlist => this.createPlaylistCardHTML(playlist)).join('');
                this.bindCardEvents(libraryGrid);
            }
        } else if (tab === 'favorites') {
            if (this.favorites.length === 0) {
                libraryGrid.innerHTML = '<div class="empty-state">No favorite songs yet. Start liking songs!</div>';
            } else {
                libraryGrid.innerHTML = this.favorites.map(track => this.createCardHTML(track)).join('');
                this.bindCardEvents(libraryGrid);
            }
        }
    }

    // Create HTML for content cards
    createCardHTML(item) {
        const imageDisplay = item.image ? 
            `<img src="${item.image}" alt="${item.title}" class="card-image">` :
            `<div class="card-image"><i class="fas fa-music"></i></div>`;

        const dataAttribute = item.type === 'playlist' ? 
            `data-playlist='${JSON.stringify(item)}'` : 
            `data-track='${JSON.stringify(item)}'`;

        const addToPlaylistBtn = item.type === 'track' ? 
            `<button class="add-to-playlist-btn" ${dataAttribute} title="Add to Playlist">
                <i class="fas fa-plus"></i>
            </button>` : '';

        return `
            <div class="card" data-id="${item.id}" data-type="${item.type}">
                ${imageDisplay}
                <h3 class="card-title">${item.title}</h3>
                <p class="card-subtitle">${item.subtitle}</p>
                <button class="play-btn-overlay" ${dataAttribute}>
                    <i class="fas fa-play"></i>
                </button>
                ${addToPlaylistBtn}
            </div>
        `;
    }

    // Create HTML for playlist cards
    createPlaylistCardHTML(playlist) {
        return `
            <div class="card" data-id="${playlist.id}" data-type="playlist">
                <div class="card-image"><i class="fas fa-music"></i></div>
                <h3 class="card-title">${playlist.name}</h3>
                <p class="card-subtitle">${playlist.tracks.length} songs</p>
                <button class="play-btn-overlay" data-playlist='${JSON.stringify(playlist)}'>
                    <i class="fas fa-play"></i>
                </button>
            </div>
        `;
    }

    // Bind events to cards
    bindCardEvents(container) {
        container.querySelectorAll('.play-btn-overlay').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const trackData = e.target.closest('[data-track]')?.dataset.track;
                const playlistData = e.target.closest('[data-playlist]')?.dataset.playlist;
                
                if (trackData) {
                    const track = JSON.parse(trackData);
                    this.playTrack(track);
                } else if (playlistData) {
                    const playlist = JSON.parse(playlistData);
                    this.playPlaylist(playlist);
                }
            });
        });

        // Add to playlist button events
        container.querySelectorAll('.add-to-playlist-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const trackData = e.target.closest('[data-track]')?.dataset.track;
                if (trackData) {
                    const track = JSON.parse(trackData);
                    this.quickAddToPlaylist(track);
                }
            });
        });

        // Add context menu for cards
        container.querySelectorAll('.card').forEach(card => {
            card.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.showContextMenu(e, card);
            });
        });
    }

    // Play a single track
    playTrack(track) {
        // Check if track has either audioSrc (local) or preview_url (external)
        if (!track.audioSrc && !track.preview_url) {
            this.showToast('No audio available for this track', 'error');
            return;
        }

        this.currentTrack = track;
        
        // Use audioSrc for local files, or preview_url for external sources
        const audioSource = track.audioSrc || track.preview_url;
        
        if (audioSource) {
            this.audioPlayer.src = audioSource;
            this.audioPlayer.play();
            this.isPlaying = true;
            this.updatePlayerUI();
            this.updatePlayButton();
        } else {
            console.warn('No audio source available for track:', track.title);
            alert('No audio available for this track');
        }
    }

    // Play a playlist
    playPlaylist(playlist) {
        if (playlist.tracks && playlist.tracks.length > 0) {
            let playlistTracks;
            
            // Handle demo playlists (track IDs) vs custom playlists (full track objects)
            if (typeof playlist.tracks[0] === 'string') {
                // Demo playlists: convert track IDs to actual track objects
                playlistTracks = playlist.tracks.map(trackId => {
                    return this.demoTracks.find(track => track.id === trackId);
                }).filter(track => track !== undefined);
            } else {
                // Custom playlists: tracks are already full objects
                playlistTracks = playlist.tracks;
            }
            
            if (playlistTracks.length > 0) {
                this.currentPlaylist = playlistTracks;
                this.currentTrackIndex = 0;
                this.playTrack(playlistTracks[0]);
                const playlistName = playlist.title || playlist.name;
                this.showToast(`Playing playlist: ${playlistName}`, 'success');
            } else {
                this.showToast('No valid tracks found in playlist', 'error');
            }
        } else {
            this.showToast('Playlist is empty', 'error');
        }
    }

    // Toggle play/pause
    togglePlay() {
        if (!this.currentTrack) {
            this.showToast('No track selected', 'error');
            return;
        }

        if (this.isPlaying) {
            this.audioPlayer.pause();
            this.isPlaying = false;
        } else {
            this.audioPlayer.play();
            this.isPlaying = true;
        }
        
        this.updatePlayButton();
    }

    // Previous track
    previousTrack() {
        if (this.currentPlaylist.length === 0) return;
        
        this.currentTrackIndex = this.currentTrackIndex > 0 ? 
            this.currentTrackIndex - 1 : 
            this.currentPlaylist.length - 1;
        
        this.playTrack(this.currentPlaylist[this.currentTrackIndex]);
    }

    // Next track
    nextTrack() {
        if (this.currentPlaylist.length === 0) return;
        
        this.currentTrackIndex = this.currentTrackIndex < this.currentPlaylist.length - 1 ? 
            this.currentTrackIndex + 1 : 
            0;
        
        this.playTrack(this.currentPlaylist[this.currentTrackIndex]);
    }

    // Handle track end
    handleTrackEnd() {
        if (this.repeatMode === 'one') {
            this.audioPlayer.play();
        } else if (this.repeatMode === 'all' || this.currentTrackIndex < this.currentPlaylist.length - 1) {
            this.nextTrack();
        } else {
            this.isPlaying = false;
            this.updatePlayButton();
        }
    }

    // Toggle shuffle mode
    toggleShuffle() {
        this.isShuffled = !this.isShuffled;
        const shuffleBtn = document.getElementById('shuffleBtn');
        shuffleBtn.classList.toggle('active', this.isShuffled);
        
        if (this.isShuffled) {
            this.shufflePlaylist();
        }
        
        this.showToast(`Shuffle ${this.isShuffled ? 'on' : 'off'}`, 'success');
    }

    // Shuffle playlist
    shufflePlaylist() {
        if (this.currentPlaylist.length <= 1) return;
        
        // Fisher-Yates shuffle algorithm
        for (let i = this.currentPlaylist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.currentPlaylist[i], this.currentPlaylist[j]] = [this.currentPlaylist[j], this.currentPlaylist[i]];
        }
        
        // Update current track index
        this.currentTrackIndex = this.currentPlaylist.findIndex(track => track.id === this.currentTrack.id);
    }

    // Toggle repeat mode
    toggleRepeat() {
        const modes = ['none', 'all', 'one'];
        const currentIndex = modes.indexOf(this.repeatMode);
        this.repeatMode = modes[(currentIndex + 1) % modes.length];
        
        const repeatBtn = document.getElementById('repeatBtn');
        repeatBtn.classList.remove('active');
        
        if (this.repeatMode !== 'none') {
            repeatBtn.classList.add('active');
            if (this.repeatMode === 'one') {
                repeatBtn.innerHTML = '<i class="fas fa-redo"></i><span>1</span>';
            } else {
                repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
            }
        }
        
        this.showToast(`Repeat ${this.repeatMode === 'none' ? 'off' : this.repeatMode}`, 'success');
    }

    // Toggle favorite status
    toggleFavorite() {
        if (!this.currentTrack) return;
        
        const favoriteBtn = document.getElementById('favoriteBtn');
        const isCurrentlyFavorite = this.favorites.some(track => track.id === this.currentTrack.id);
        
        if (isCurrentlyFavorite) {
            this.favorites = this.favorites.filter(track => track.id !== this.currentTrack.id);
            favoriteBtn.innerHTML = '<i class="far fa-heart"></i>';
            favoriteBtn.classList.remove('active');
            this.showToast('Removed from favorites', 'success');
        } else {
            this.favorites.push(this.currentTrack);
            favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>';
            favoriteBtn.classList.add('active');
            this.showToast('Added to favorites', 'success');
        }
        
        this.saveFavorites();
    }

    // Set volume
    setVolume(volume) {
        this.volume = volume;
        this.audioPlayer.volume = volume;
        
        const volumeBtn = document.getElementById('volumeBtn');
        if (volume === 0) {
            volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else if (volume < 0.5) {
            volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
        } else {
            volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    }

    // Seek to position in track
    seekTo(e) {
        if (!this.currentTrack) return;
        
        const progressBar = e.target;
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
        
        const newTime = percentage * this.audioPlayer.duration;
        this.audioPlayer.currentTime = newTime;
    }

    // Update player UI
    updatePlayerUI() {
        if (!this.currentTrack) {
            // Reset to default state when no track
            document.getElementById('trackTitle').textContent = 'Select a song';
            document.getElementById('trackArtist').textContent = 'No artist';
            document.getElementById('trackImage').src = 'assets/icons/vinyl.png';
            return;
        }
        
        document.getElementById('trackTitle').textContent = this.currentTrack.title;
        document.getElementById('trackArtist').textContent = this.currentTrack.subtitle;
        
        const trackImage = document.getElementById('trackImage');
        if (this.currentTrack.image) {
            trackImage.src = this.currentTrack.image;
        } else {
            trackImage.src = 'assets/icons/vinyl.png'; // Fallback to default
        }
        
        // Update favorite button
        const favoriteBtn = document.getElementById('favoriteBtn');
        const isFavorite = this.favorites.some(track => track.id === this.currentTrack.id);
        favoriteBtn.classList.toggle('active', isFavorite);
        favoriteBtn.innerHTML = isFavorite ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
    }

    // Update play button icon
    updatePlayButton() {
        const playBtn = document.getElementById('playBtn');
        playBtn.innerHTML = this.isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }

    // Update progress bar
    updateProgress() {
        if (!this.audioPlayer.duration) return;
        
        const progress = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
        const progressFill = document.getElementById('progressFill');
        progressFill.style.width = `${progress}%`;
        
        // Update time displays
        document.getElementById('currentTime').textContent = this.formatTime(this.audioPlayer.currentTime);
    }

    // Update duration display
    updateDuration() {
        document.getElementById('duration').textContent = this.formatTime(this.audioPlayer.duration);
    }

    // Format time in MM:SS format
    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Show lyrics modal
    async showLyrics() {
        if (!this.currentTrack) {
            this.showToast('No track selected', 'error');
            return;
        }

        const modal = document.getElementById('lyricsModal');
        const lyricsContent = document.getElementById('lyricsContent');
        
        lyricsContent.innerHTML = '<div class="loading">Loading lyrics...</div>';
        modal.classList.remove('hidden');

        // Simulate lyrics fetch (in real app, use Genius API or Lyrics.ovh)
        setTimeout(() => {
            const sampleLyrics = `
                <p>[Verse 1]</p>
                <p>This is a sample lyric for demonstration</p>
                <p>In a real application, you would fetch lyrics</p>
                <p>From APIs like Genius or Lyrics.ovh</p>
                <br>
                <p>[Chorus]</p>
                <p>The song "${this.currentTrack.title}"</p>
                <p>By ${this.currentTrack.subtitle}</p>
                <p>Would have real lyrics here</p>
                <br>
                <p>[Verse 2]</p>
                <p>You can implement the Genius Lyrics API</p>
                <p>Or use the Lyrics.ovh API for free</p>
                <p>To get actual song lyrics</p>
            `;
            
            lyricsContent.innerHTML = sampleLyrics;
        }, 1000);
    }

    // Show create playlist modal
    showCreatePlaylistModal() {
        const modal = document.getElementById('createPlaylistModal');
        const input = document.getElementById('playlistNameInput');
        input.value = '';
        modal.classList.remove('hidden');
        input.focus();
    }

    // Create new playlist
    createPlaylist() {
        const nameInput = document.getElementById('playlistNameInput');
        const name = nameInput.value.trim();
        
        if (!name) {
            this.showToast('Please enter a playlist name', 'error');
            return;
        }
        
        const newPlaylist = {
            id: 'playlist-' + Date.now(),
            name: name,
            tracks: [],
            created: new Date().toISOString()
        };
        
        this.playlists.push(newPlaylist);
        this.savePlaylists();
        this.updatePlaylistsUI();
        this.hideModal('createPlaylistModal');
        this.showToast('Playlist created successfully', 'success');
    }

    // Hide modal
    hideModal(modalId) {
        console.log('hideModal called with:', modalId);
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            console.log('Modal hidden:', modalId);
        } else {
            console.error('Modal not found:', modalId);
        }
    }

    // Show context menu
    showContextMenu(e, card) {
        // Remove existing context menus
        document.querySelectorAll('.context-menu').forEach(menu => menu.remove());
        
        const menu = document.createElement('div');
        menu.className = 'context-menu';
        menu.style.left = e.pageX + 'px';
        menu.style.top = e.pageY + 'px';
        
        const trackData = card.dataset.track;
        const playlistData = card.dataset.playlist;
        
        let menuItems = [];
        
        if (trackData) {
            const track = JSON.parse(trackData);
            menuItems = [
                { text: 'Play', action: () => this.playTrack(track) },
                { text: 'Add to Playlist', action: () => this.showAddToPlaylistMenu(track) },
                { text: 'Add to Favorites', action: () => this.addToFavorites(track) }
            ];
        } else if (playlistData) {
            const playlist = JSON.parse(playlistData);
            menuItems = [
                { text: 'Play Playlist', action: () => this.playPlaylist(playlist) },
                { text: 'Delete Playlist', action: () => this.deletePlaylist(playlist.id), class: 'destructive' }
            ];
        }
        
        menu.innerHTML = menuItems.map(item => 
            `<div class="context-menu-item ${item.class || ''}">${item.text}</div>`
        ).join('');
        
        menu.querySelectorAll('.context-menu-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                menuItems[index].action();
                menu.remove();
            });
        });
        
        document.body.appendChild(menu);
        
        // Remove menu on click outside
        setTimeout(() => {
            document.addEventListener('click', () => menu.remove(), { once: true });
        }, 0);
    }

    // Quick add to playlist (automatic)
    quickAddToPlaylist(track) {
        // Create "My Playlist" if no playlists exist
        if (this.playlists.length === 0) {
            const defaultPlaylist = {
                id: 'playlist-' + Date.now(),
                name: 'My Playlist',
                tracks: [],
                created: new Date().toISOString()
            };
            this.playlists.push(defaultPlaylist);
        }
        
        // Use the most recently created/used playlist
        const targetPlaylist = this.playlists[this.playlists.length - 1];
        
        // Check if track already exists in playlist
        const trackExists = targetPlaylist.tracks.some(t => t.id === track.id);
        if (trackExists) {
            this.showToast(`"${track.title}" is already in "${targetPlaylist.name}"`, 'info');
            return;
        }
        
        // Add track to playlist
        targetPlaylist.tracks.push(track);
        this.savePlaylists();
        this.updatePlaylistsUI();
        this.showToast(`Added "${track.title}" to "${targetPlaylist.name}"`, 'success');
    }

    // Show add to playlist submenu
    showAddToPlaylistMenu(track) {
        // Remove existing context menus
        document.querySelectorAll('.context-menu').forEach(menu => menu.remove());
        
        if (this.playlists.length === 0) {
            this.showToast('No playlists available. Create a playlist first!', 'info');
            return;
        }
        
        const menu = document.createElement('div');
        menu.className = 'context-menu playlist-menu';
        
        // Position menu at mouse location or center
        const rect = document.body.getBoundingClientRect();
        menu.style.left = (rect.width / 2 - 100) + 'px';
        menu.style.top = (rect.height / 2 - 100) + 'px';
        
        const menuItems = [
            { text: '📁 Add to Playlist', class: 'menu-header' },
            ...this.playlists.map(playlist => ({
                text: `♪ ${playlist.name} (${playlist.tracks.length} songs)`,
                action: () => this.addToPlaylist(track, playlist.id)
            }))
        ];
        
        menu.innerHTML = menuItems.map(item => 
            `<div class="context-menu-item ${item.class || ''}">${item.text}</div>`
        ).join('');
        
        menu.querySelectorAll('.context-menu-item:not(.menu-header)').forEach((item, index) => {
            item.addEventListener('click', () => {
                // Skip header, so index needs adjustment
                const actionIndex = index;
                if (menuItems[actionIndex + 1] && menuItems[actionIndex + 1].action) {
                    menuItems[actionIndex + 1].action();
                }
                menu.remove();
            });
        });
        
        document.body.appendChild(menu);
        
        // Remove menu on click outside
        setTimeout(() => {
            document.addEventListener('click', () => menu.remove(), { once: true });
        }, 0);
    }

    // Add track to playlist
    addToPlaylist(track, playlistId) {
        const playlist = this.playlists.find(p => p.id === playlistId);
        if (!playlist) {
            this.showToast('Playlist not found', 'error');
            return;
        }
        
        // Check if track already exists in playlist
        const trackExists = playlist.tracks.some(t => t.id === track.id);
        if (trackExists) {
            this.showToast(`"${track.title}" is already in "${playlist.name}"`, 'info');
            return;
        }
        
        // Add track to playlist
        playlist.tracks.push(track);
        this.savePlaylists();
        this.updatePlaylistsUI();
        this.showToast(`Added "${track.title}" to "${playlist.name}"`, 'success');
    }

    // Add track to favorites
    addToFavorites(track) {
        if (!this.favorites.some(fav => fav.id === track.id)) {
            this.favorites.push(track);
            this.saveFavorites();
            this.showToast('Added to favorites', 'success');
        } else {
            this.showToast('Already in favorites', 'error');
        }
    }

    // Delete playlist
    deletePlaylist(playlistId) {
        this.playlists = this.playlists.filter(p => p.id !== playlistId);
        this.savePlaylists();
        this.updatePlaylistsUI();
        if (this.currentPage === 'library') {
            this.loadLibraryPage();
        }
        this.showToast('Playlist deleted', 'success');
    }

    // Update playlists in sidebar
    updatePlaylistsUI() {
        const playlistList = document.getElementById('playlistList');
        
        if (this.playlists.length === 0) {
            playlistList.innerHTML = '<li class="playlist-item">No playlists yet</li>';
        } else {
            playlistList.innerHTML = this.playlists.map(playlist => 
                `<li class="playlist-item" data-playlist-id="${playlist.id}">${playlist.name}</li>`
            ).join('');
            
            // Add click events to playlist items
            playlistList.querySelectorAll('.playlist-item').forEach(item => {
                item.addEventListener('click', () => {
                    const playlistId = item.dataset.playlistId;
                    const playlist = this.playlists.find(p => p.id === playlistId);
                    if (playlist) {
                        this.playPlaylist(playlist);
                    }
                });
            });
        }
    }

    // Set search filter
    setSearchFilter(filter) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        
        // In a real app, you would re-filter the search results
        this.showToast(`Filter set to: ${filter}`, 'success');
    }

    // Save playlists to localStorage
    savePlaylists() {
        localStorage.setItem('playlists', JSON.stringify(this.playlists));
    }

    // Save favorites to localStorage
    saveFavorites() {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }

    // Show toast notification
    showToast(message, type = 'info') {
        // Remove existing toasts
        document.querySelectorAll('.toast').forEach(toast => toast.remove());
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MusicApp();
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// API Integration Examples (uncomment and modify for real APIs)


