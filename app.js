/**
 * HamsterPlayer Official Web Interaction Script
 * Complete, Pure Vanilla JS, Zero-Dependencies, Highly Responsive & Interactive
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Mobile Drawer Navigation
  // ==========================================================================
  const menuBtn = document.getElementById('menuBtn');
  const closeDrawer = document.getElementById('closeDrawer');
  const drawer = document.getElementById('drawer');
  const dlinks = document.querySelectorAll('.dlink');

  function toggleDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => toggleDrawer(true));
  }
  if (closeDrawer) {
    closeDrawer.addEventListener('click', () => toggleDrawer(false));
  }
  dlinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      toggleDrawer(false);
    }
  });

  // ==========================================================================
  // 2. Interactive Player Simulation
  // ==========================================================================
  const playlist = [
    {
      title: "Doma",
      artist: "Josean Log",
      format: "FLAC · 24-bit / 96 kHz",
      art: "assets/images/photo_2_2026-09-06_12-09-25.jpg",
      duration: 218 // 3:38
    },
    {
      title: "Loser",
      artist: "BigBang",
      format: "FLAC · 16-bit / 44.1 kHz",
      art: "assets/images/photo_1_2026-09-06_12-09-25.jpg",
      duration: 232 // 3:52
    },
    {
      title: "Niño",
      artist: "Leonel García",
      format: "MP3 · 320 kbps (Hi-Res DSP)",
      art: "assets/images/photo_3_2026-09-06_12-09-25.jpg",
      duration: 245 // 4:05
    },
    {
      title: "Electric Horizon",
      artist: "Hamster Sound Labs",
      format: "DSD · 2.8 MHz Bit-Perfect",
      art: "assets/images/photo_10_2026-09-06_12-09-25.jpg",
      duration: 198 // 3:18
    }
  ];

  let currentTrackIdx = 0;
  let isPlaying = true;
  let currentTime = 74; // in seconds (01:14)
  let playerInterval = null;

  const pArt = document.getElementById('pArt');
  const pTitle = document.getElementById('pTitle');
  const pArtist = document.getElementById('pArtist');
  const pFormat = document.getElementById('pFormat');
  const pCurrent = document.getElementById('pCurrent');
  const pTotal = document.getElementById('pTotal');
  const progFill = document.getElementById('progFill');
  const progDot = document.getElementById('progDot');
  const seekbar = document.getElementById('seekbar');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const likeBtn = document.getElementById('likeBtn');
  const likeIcon = document.getElementById('likeIcon');
  const waveBars = document.querySelectorAll('.wbar');

  function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function updatePlayerUI() {
    const track = playlist[currentTrackIdx];
    if (pTitle) pTitle.textContent = track.title;
    if (pArtist) pArtist.textContent = track.artist;
    if (pFormat) pFormat.textContent = track.format;
    if (pArt) {
      pArt.style.opacity = '0.5';
      pArt.src = track.art;
      setTimeout(() => { pArt.style.opacity = '1'; }, 150);
    }
    if (pTotal) pTotal.textContent = formatTime(track.duration);
    updateProgressUI();
  }

  function updateProgressUI() {
    const track = playlist[currentTrackIdx];
    const pct = Math.min(100, Math.max(0, (currentTime / track.duration) * 100));
    if (progFill) progFill.style.width = `${pct}%`;
    if (progDot) progDot.style.left = `${pct}%`;
    if (pCurrent) pCurrent.textContent = formatTime(currentTime);
  }

  function setPlayingState(playing) {
    isPlaying = playing;
    if (playIcon && pauseIcon) {
      if (isPlaying) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
      } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
      }
    }
    waveBars.forEach(bar => {
      if (isPlaying) {
        bar.classList.add('animating');
      } else {
        bar.classList.remove('animating');
      }
    });

    if (isPlaying) {
      startTimer();
    } else {
      stopTimer();
    }
  }

  function startTimer() {
    stopTimer();
    playerInterval = setInterval(() => {
      const track = playlist[currentTrackIdx];
      currentTime += 1;
      if (currentTime >= track.duration) {
        changeTrack(1);
      } else {
        updateProgressUI();
      }
    }, 1000);
  }

  function stopTimer() {
    if (playerInterval) {
      clearInterval(playerInterval);
      playerInterval = null;
    }
  }

  function changeTrack(direction) {
    currentTrackIdx = (currentTrackIdx + direction + playlist.length) % playlist.length;
    currentTime = 0;
    updatePlayerUI();
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      setPlayingState(!isPlaying);
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => changeTrack(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => changeTrack(1));
  }

  // Seekbar scrubbing
  if (seekbar) {
    seekbar.addEventListener('click', (e) => {
      const rect = seekbar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.min(1, Math.max(0, clickX / rect.width));
      const track = playlist[currentTrackIdx];
      currentTime = Math.floor(ratio * track.duration);
      updateProgressUI();
    });
  }

  // Like button toggle
  let isLiked = false;
  if (likeBtn && likeIcon) {
    likeBtn.addEventListener('click', () => {
      isLiked = !isLiked;
      if (isLiked) {
        likeIcon.setAttribute('fill', '#ef4444');
        likeIcon.setAttribute('stroke', '#ef4444');
        likeBtn.style.transform = 'scale(1.2)';
        setTimeout(() => { likeBtn.style.transform = 'scale(1)'; }, 200);
      } else {
        likeIcon.setAttribute('fill', 'none');
        likeIcon.setAttribute('stroke', 'currentColor');
      }
    });
  }

  // Initialize playback simulation
  updatePlayerUI();
  setPlayingState(true);

  // ==========================================================================
  // 3. Screenshots Carousel Navigation
  // ==========================================================================
  const ssTrack = document.getElementById('ssTrack');
  const ssPrev = document.getElementById('ssPrev');
  const ssNext = document.getElementById('ssNext');

  if (ssTrack && ssPrev && ssNext) {
    const scrollAmount = 260;
    ssPrev.addEventListener('click', () => {
      ssTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    ssNext.addEventListener('click', () => {
      ssTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 4. Themes Interactivity Showcase
  // ==========================================================================
  const themeCards = document.querySelectorAll('.theme-card');
  const themePhoneImg = document.getElementById('themePhoneImg');

  themeCards.forEach(card => {
    card.addEventListener('click', () => {
      themeCards.forEach(c => {
        c.style.borderColor = 'rgba(77, 196, 196, 0.15)';
      });
      card.style.borderColor = 'rgba(77, 196, 196, 0.5)';
      const newImg = card.dataset.img;
      if (themePhoneImg && newImg) {
        themePhoneImg.style.opacity = '0.3';
        themePhoneImg.src = newImg;
        setTimeout(() => { themePhoneImg.style.opacity = '1'; }, 150);
      }
    });
  });

  // ==========================================================================
  // 5. Privacy Policy Accordion Toggle
  // ==========================================================================
  const privBtn = document.getElementById('privBtn');
  const privBody = document.getElementById('privBody');
  const privChevron = document.getElementById('privChevron');

  if (privBtn && privBody && privChevron) {
    privBtn.addEventListener('click', () => {
      const isExpanded = !privBody.classList.contains('hidden');
      if (isExpanded) {
        privBody.classList.add('hidden');
        privChevron.style.transform = 'rotate(0deg)';
        privBtn.setAttribute('aria-expanded', 'false');
      } else {
        privBody.classList.remove('hidden');
        privChevron.style.transform = 'rotate(180deg)';
        privBtn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // ==========================================================================
  // 6. Toast Notification & Donation Link Copying
  // ==========================================================================
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = msg;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  const copyBtns = document.querySelectorAll('.copy-donation-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const url = btn.dataset.url;
      if (!url) return;
      try {
        await navigator.clipboard.writeText(url);
        showToast(`¡Enlace copiado al portapapeles! (${url})`);
        const label = btn.querySelector('span');
        if (label) {
          const original = label.textContent;
          label.textContent = '¡Copiado!';
          setTimeout(() => { label.textContent = original; }, 2000);
        }
      } catch (_) {
        // Fallback prompt or selection
        showToast(`Enlace: ${url}`);
      }
    });
  });

  // ==========================================================================
  // 7. Scroll Reveal Animations (IntersectionObserver)
  // ==========================================================================
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('vis'));
  }

  // ==========================================================================
  // 8. Download Feedback
  // ==========================================================================
  const dlButtons = document.querySelectorAll('#navDlBtn, #heroDlBtn, #finalDlBtn');
  dlButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('¡Iniciando descarga de HamsterPlayer APK!');
    });
  });

});