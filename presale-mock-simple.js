// Simplified Mock presale data for local development
console.log('Loading presale mock script...');

// Mock data
const presaleData = {
    usdRaised:  11308264.16,
    usdTarget: 11362728.99,
    tokenPrice: 0.012625,
    endTime: Date.now() + (24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000) + (45 * 60 * 1000)
};

// Simple function to update all elements
function updatePresaleWidget() {
    try {
        // Update timer
        const timeCards = document.querySelectorAll('.time-card .value');
        if (timeCards.length >= 4) {
            const now = Date.now();
            const timeLeft = Math.max(0, presaleData.endTime - now);

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            timeCards[0].textContent = days.toString().padStart(2, '0');
            timeCards[1].textContent = hours.toString().padStart(2, '0');
            timeCards[2].textContent = minutes.toString().padStart(2, '0');
            timeCards[3].textContent = seconds.toString().padStart(2, '0');
        }

        // Update USD raised
        const usdSpans = document.querySelectorAll('.font-lg-18');
        if (usdSpans.length >= 2) {
            usdSpans[0].textContent = '$' + presaleData.usdRaised.toLocaleString();
            usdSpans[1].textContent = '/ $' + presaleData.usdTarget.toLocaleString();
        }

        // Update progress bar
        const progressBar = document.querySelector('.progress .bar');
        if (progressBar) {
            const percentage = (presaleData.usdRaised / presaleData.usdTarget) * 100;
            progressBar.style.width = percentage.toFixed(1) + '%';
        }

        // Update token price
        const priceElement = document.querySelector('.dashTitle');
        if (priceElement) {
            priceElement.textContent = '1 $HYPER = $' + presaleData.tokenPrice;
        }

        // Remove shimmer effects
        const shimmerElements = document.querySelectorAll('.shimmer');
        shimmerElements.forEach(el => el.classList.remove('shimmer'));

        console.log('Presale widget updated successfully');
    } catch (error) {
        console.error('Error updating presale widget:', error);
    }
}

// Start updating after a delay
setTimeout(() => {
    updatePresaleWidget();
    setInterval(updatePresaleWidget, 1000);
}, 2000);

console.log('Presale mock script loaded successfully');
