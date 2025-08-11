// Mock presale data for local development
// This replaces the blocked SSE (Server-Sent Events) API calls

(function() {
    'use strict';

    // Mock data matching the original site values
    const mockPresaleData = {
        usdRaised: 8247336.5,
        usdTarget: 8472516.4,
        tokenPrice: 0.012625,
        endTime: Date.now() + (1 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000) + (45 * 60 * 1000) + (32 * 1000), // 1d 12h 45m 32s from now
        isLive: true
    };

    // Function to update timer elements
    function updateTimer() {
        const now = Date.now();
        const timeLeft = Math.max(0, mockPresaleData.endTime - now);

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update timer display elements
        const timeCards = document.querySelectorAll('.time-card');
        if (timeCards.length >= 4) {
            timeCards[0].querySelector('.value').textContent = days.toString().padStart(2, '0');
            timeCards[1].querySelector('.value').textContent = hours.toString().padStart(2, '0');
            timeCards[2].querySelector('.value').textContent = minutes.toString().padStart(2, '0');
            timeCards[3].querySelector('.value').textContent = seconds.toString().padStart(2, '0');
        }
    }

    // Function to update USD raised display
    function updateUSDRaised() {
        // Find all spans with font-lg-18 class that contain dollar signs
        const spans = document.querySelectorAll('.font-lg-18.font-15.fw-bold');
        if (spans.length >= 2) {
            spans[0].textContent = `${mockPresaleData.usdRaised.toLocaleString()}`;
            spans[1].textContent = `/ ${mockPresaleData.usdTarget.toLocaleString()}`;
        }
    }

    // Function to update progress bar
    function updateProgressBar() {
        const progressBar = document.querySelector('.progress .bar');
        if (progressBar) {
            const percentage = (mockPresaleData.usdRaised / mockPresaleData.usdTarget) * 100;
            progressBar.style.width = `${percentage.toFixed(1)}%`;
        }

        const progressElement = document.querySelector('.progress');
        if (progressElement) {
            const percentage = (mockPresaleData.usdRaised / mockPresaleData.usdTarget) * 100;
            progressElement.setAttribute('data-percent', percentage.toFixed(1));
        }
    }

    // Function to update token price
    function updateTokenPrice() {
        const priceElement = document.querySelector('.dashTitle');
        if (priceElement) {
            priceElement.textContent = `1 $HYPER = $${mockPresaleData.tokenPrice}`;
        }
    }

    // Function to remove shimmer effects
    function removeShimmerEffects() {
        const shimmerElements = document.querySelectorAll('.shimmer');
        shimmerElements.forEach(element => {
            element.classList.remove('shimmer');
        });
    }

    // Initialize mock data when DOM is ready
    function initializeMockData() {
        console.log('Initializing mock presale data...');
        updateTimer();
        updateUSDRaised();
        updateProgressBar();
        updateTokenPrice();
        removeShimmerEffects();
        console.log('Mock presale data initialized successfully');

        // Update timer every second
        setInterval(updateTimer, 1000);

        // Simulate gradual increase in USD raised (small increments every few seconds)
        setInterval(() => {
            mockPresaleData.usdRaised += Math.random() * 50 + 10; // Random increase between $10-$60
            updateUSDRaised();
            updateProgressBar();
        }, 5000);
    }

    // Wait for DOM to be ready and Angular to fully load
    function waitForAngularAndInitialize() {
        const timeCards = document.querySelectorAll('.time-card');
        if (timeCards.length >= 4) {
            // Angular has rendered the components
            initializeMockData();
        } else {
            // Try again in 500ms
            setTimeout(waitForAngularAndInitialize, 500);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(waitForAngularAndInitialize, 1000);
        });
    } else {
        // DOM is already ready
        setTimeout(waitForAngularAndInitialize, 1000);
    }

    // Override EventSource to prevent failed SSE connections
    const originalEventSource = window.EventSource;
    window.EventSource = function(url, eventSourceInitDict) {
        console.log('Blocked SSE connection to:', url);
        return {
            close: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            readyState: 2 // CLOSED
        };
    };

})();
