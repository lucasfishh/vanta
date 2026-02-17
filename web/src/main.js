import { Buffer } from 'buffer';
// web3.js expects Node globals in the browser.
window.Buffer = window.Buffer || Buffer;
window.global = window.global || window;

import { route, initRouter } from './router.js';
import { createNavbar } from './components/navbar.js';
import { loadConfig } from './config.js';
import { walletService } from './lib/wallet.js';

import { landingPage } from './pages/landing.js';
import { explorePage } from './pages/explore.js';
import { agentPage } from './pages/agent.js';
import { registerPage } from './pages/register.js';
import { activityPage } from './pages/activity.js';
import { leaderboardPage } from './pages/leaderboard.js';

document.body.prepend(createNavbar());

route('/', landingPage);
