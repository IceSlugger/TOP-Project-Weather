import './style.css';

const API_KEY = 'FNLGYPVSPYP6VJQU8JDCX2YEC'; 

let currentWeatherData = null;
let currentUnit = 'F';

// 1. Create the Pixel-Art Canvas (Fixed Retro Resolution: 320x180)
const canvas = document.createElement('canvas');
canvas.id = 'weather-bg-canvas';
canvas.width = 320;
canvas.height = 180;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// 2. Build UI Card Layout
const card = document.createElement('div');
card.className = 'weather-card';
card.innerHTML = `
  <div class="unit-toggle">
    <button id="toggle-f" class="toggle-btn active">°F</button>
    <button id="toggle-c" class="toggle-btn">°C</button>
  </div>
  <div class="search-container">
    <form id="weather-form">
      <input type="text" id="city-input" placeholder="Enter city name..." required autocomplete="off">
      <button type="submit">Search</button>
    </form>
    <div id="suggestions-box" class="suggestions-box"></div>
  </div>
  <div id="loading-spinner" class="spinner" style="display: none;"></div>
  <div id="weather-display" style="display: none;"></div>
`;
document.body.appendChild(card);

const displayDiv = document.getElementById('weather-display');
const spinner = document.getElementById('loading-spinner');
const cityInput = document.getElementById('city-input');
const suggestionsBox = document.getElementById('suggestions-box');

// Asset and UI Theme Mappings
const weatherAssets = {
  'clear-day': { icon: '☀️', type: 'clear' },
  'clear-night': { icon: '🌙', type: 'clear-night' },
  'rain': { icon: '🌧️', type: 'rain' },
  'showers-day': { icon: '🌦️', type: 'rain' },
  'showers-night': { icon: '🌦️', type: 'rain' },
  'thunderstorm': { icon: '⛈️', type: 'rain' },
  'snow': { icon: '❄️', type: 'snow' },
  'wind': { icon: '💨', type: 'cloudy' },
  'fog': { icon: '🌫️', type: 'cloudy' },
  'cloudy': { icon: '☁️', type: 'cloudy' },
  'partly-cloudy-day': { icon: '⛅', type: 'cloudy' },
  'partly-cloudy-night': { icon: '☁️', type: 'cloudy' },
  'default': { icon: '🌍', type: 'clear' }
};

// 3. Engine States for Pixel-Art Background Animations
let animationId = null;
let particles = [];
let clouds = [];
let sunCycle = 0;

function startPixelAnimation(weatherType) {
  if (animationId) cancelAnimationFrame(animationId);
  particles = [];
  clouds = [];

  // Spawn retro rain streaks
  if (weatherType === 'rain') {
    for (let i = 0; i < 50; i++) {
      particles.push({ x: Math.random() * 320, y: Math.random() * 180, speed: 4 + Math.random() * 3, len: 4 + Math.random() * 4 });
    }
  }
  // Spawn retro drifting snow blocks
  if (weatherType === 'snow') {
    for (let i = 0; i < 35; i++) {
      particles.push({ x: Math.random() * 320, y: Math.random() * 180, speed: 0.4 + Math.random() * 0.5, size: 1.5 + Math.random() * 1.5, drift: Math.random() * 10 });
    }
  }
  // Spawn shifting, blocky horizontal clouds
  if (weatherType === 'cloudy' || weatherType === 'rain') {
    clouds = [
      { x: 10, y: 15, w: 60, h: 14, speed: 0.04 },
      { x: 120, y: 35, w: 80, h: 18, speed: 0.02 },
      { x: 240, y: 20, w: 55, h: 12, speed: 0.06 }
    ];
  }

  function loop() {
    ctx.clearRect(0, 0, 320, 180);

    // Render Retro Base Environment Palettes
    if (weatherType === 'clear') {
      ctx.fillStyle = '#4facfe'; // 8-bit sky blue
      ctx.fillRect(0, 0, 320, 180);
      
      // Draw Chunky Pixel Art Sun Core
      sunCycle += 0.02;
      ctx.fillStyle = '#ffdf00';
      ctx.fillRect(40, 35, 20, 20);
      ctx.fillRect(44, 31, 12, 28);
      ctx.fillRect(36, 39, 28, 12);
      
      // Flashing pixel sunbeams
      ctx.fillStyle = 'rgba(255, 223, 0, 0.4)';
      let pulse = Math.floor(Math.sin(sunCycle) * 3);
      ctx.fillRect(26 - pulse, 43, 6 + pulse, 4);
      ctx.fillRect(68, 43, 6 + pulse, 4);
      ctx.fillRect(48, 21 - pulse, 4, 6 + pulse);
      ctx.fillRect(48, 59, 4, 6 + pulse);

    } else if (weatherType === 'clear-night') {
      ctx.fillStyle = '#0b132b'; // Deep space midnight
      ctx.fillRect(0, 0, 320, 180);
      
      // Static background twinkling pixel stars
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(30, 25, 1, 1);
      ctx.fillRect(140, 50, 2, 2);
      ctx.fillRect(280, 15, 1, 1);
      ctx.fillRect(210, 80, 2, 1);

    } else if (weatherType === 'rain') {
      ctx.fillStyle = '#2c3e50'; // Dark storm clouds slate
      ctx.fillRect(0, 0, 320, 180);

    } else if (weatherType === 'snow') {
      ctx.fillStyle = '#7f8c8d'; // Soft winter gray
      ctx.fillRect(0, 0, 320, 180);

    } else {
      ctx.fillStyle = '#5d6d7e'; // Standard overcast overcast gray
      ctx.fillRect(0, 0, 320, 180);
    }

    // Draw and Update Pixel Clouds
    ctx.fillStyle = weatherType === 'rain' ? '#34495e' : '#ffffff';
    clouds.forEach(c => {
      c.x += c.speed;
      if (c.x > 320) c.x = -c.w;
      
      // Draw compound blocky shapes mimicking true pixel art clouds
      ctx.fillRect(Math.floor(c.x), Math.floor(c.y), c.w, c.h);
      ctx.fillRect(Math.floor(c.x + c.w * 0.15), Math.floor(c.y - c.h * 0.3), c.w * 0.7, c.h * 1.3);
      ctx.fillRect(Math.floor(c.x + c.w * 0.3), Math.floor(c.y - c.h * 0.5), c.w * 0.4, c.h * 1.5);
    });

    // Animate Weather Particles
    if (weatherType === 'rain') {
      ctx.fillStyle = '#a1c4fd';
      particles.forEach(p => {
        p.y += p.speed;
        if (p.y > 180) { p.y = -p.len; p.x = Math.random() * 320; }
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), 1, Math.floor(p.len)); // 1-pixel wide lines
      });
    } else if (weatherType === 'snow') {
      ctx.fillStyle = '#ffffff';
      particles.forEach(p => {
        p.y += p.speed;
        p.drift += 0.04;
        p.x += Math.sin(p.drift) * 0.2;
        if (p.y > 180) { p.y = -5; p.x = Math.random() * 320; }
        let sz = Math.floor(p.size);
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), sz, sz); // Squares for snowflakes
      });
    }

    animationId = requestAnimationFrame(loop);
  }
  loop();
}

// 4. Real-time Location Autocomplete Dropdown
let debounceTimeout;
cityInput.addEventListener('input', () => {
  clearTimeout(debounceTimeout);
  const query = cityInput.value.trim();

  if (query.length < 3) {
    suggestionsBox.style.display = 'none';
    return;
  }

  debounceTimeout = setTimeout(async () => {
    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=en`);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        suggestionsBox.innerHTML = data.results
          .map(city => {
            const region = city.admin1 ? `, ${city.admin1}` : '';
            return `<div class="suggestion-item" data-name="${city.name}, ${city.country}">${city.name}${region}, ${city.country}</div>`;
          })
          .join('');
        suggestionsBox.style.display = 'block';
      } else {
        suggestionsBox.style.display = 'none';
      }
    } catch (err) {
      console.error(err);
    }
  }, 300);
});

suggestionsBox.addEventListener('click', (e) => {
  if (e.target.classList.contains('suggestion-item')) {
    const targetCity = e.target.getAttribute('data-name');
    cityInput.value = targetCity;
    suggestionsBox.style.display = 'none';
    getWeatherData(targetCity);
  }
});

document.addEventListener('click', (e) => {
  if (e.target !== cityInput && e.target !== suggestionsBox) {
    suggestionsBox.style.display = 'none';
  }
});

// 5. Data Structures
function processWeatherData(rawData) {
  return {
    location: rawData.address,
    tempF: rawData.currentConditions.temp,
    feelsLikeF: rawData.currentConditions.feelslike,
    condition: rawData.currentConditions.conditions,
    iconCode: rawData.currentConditions.icon,
    humidity: rawData.currentConditions.humidity,
    windSpeed: rawData.currentConditions.windspeed
  };
}

const convertToCelsius = (f) => Math.round(((f - 32) * 5) / 9);

function displayWeather() {
  if (!currentWeatherData) return;

  displayDiv.style.display = 'block';
  
  // Hand off the custom condition code to trigger the canvas renderer background
  const theme = weatherAssets[currentWeatherData.iconCode] || weatherAssets['default'];
  startPixelAnimation(theme.type);

  const displayTemp = currentUnit === 'F' 
    ? `${Math.round(currentWeatherData.tempF)}°F` 
    : `${convertToCelsius(currentWeatherData.tempF)}°C`;

  const displayFeels = currentUnit === 'F' 
    ? `${Math.round(currentWeatherData.feelsLikeF)}°F` 
    : `${convertToCelsius(currentWeatherData.feelsLikeF)}°C`;

  displayDiv.innerHTML = `
    <h2 style="margin: 0; font-size: 22px; color: #1c1e21; text-transform: capitalize;">${currentWeatherData.location}</h2>
    <div class="weather-icon">${theme.icon}</div>
    <h1 class="temp-display">${displayTemp}</h1>
    <p class="condition-text">${currentWeatherData.condition}</p>
    
    <div class="details-grid">
      <div class="detail-item">
        <span>Feels Like 🌡️</span>
        <strong>${displayFeels}</strong>
      </div>
      <div class="detail-item">
        <span>Humidity 💧</span>
        <strong>${currentWeatherData.humidity}%</strong>
      </div>
      <div class="detail-item">
        <span>Wind Speed 💨</span>
        <strong>${currentWeatherData.windSpeed} mph</strong>
      </div>
      <div class="detail-item">
        <span>Status Code 🏷️</span>
        <strong style="text-transform: uppercase; font-size: 11px; color:#007bff;">${currentWeatherData.iconCode}</strong>
      </div>
    </div>
  `;
}

async function getWeatherData(location) {
  spinner.style.display = 'block';
  displayDiv.style.display = 'none';

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${API_KEY}`,
      { mode: 'cors' }
    );

    if (!response.ok) throw new Error(`Location not found`);

    const rawData = await response.json();
    currentWeatherData = processWeatherData(rawData);
    displayWeather();
    
  } catch (error) {
    displayDiv.style.display = 'block';
    displayDiv.innerHTML = `<p style="color: #dc3545; margin: 25px 0; font-weight: 600;">⚠️ ${error.message}</p>`;
  } finally {
    spinner.style.display = 'none';
  }
}

document.getElementById('weather-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    suggestionsBox.style.display = 'none';
    getWeatherData(city);
  }
});

const btnF = document.getElementById('toggle-f');
const btnC = document.getElementById('toggle-c');

btnF.addEventListener('click', () => {
  if (currentUnit === 'F') return;
  currentUnit = 'F';
  btnF.classList.add('active');
  btnC.classList.remove('active');
  displayWeather();
});

btnC.addEventListener('click', () => {
  if (currentUnit === 'C') return;
  currentUnit = 'C';
  btnC.classList.add('active');
  btnF.classList.remove('active');
  displayWeather();
});

// Load Default
getWeatherData('London');