console.log('redirect.js');
/**
 * If the extension state is enabled, call the redirect.
 */
chrome.storage.sync.get('twitch_go_switcher', (items) => {
    if (items.twitch_go_switcher === 'enable') {
      console.log('Redirecting to twitch go.');
      redirectToTwitchGo();
    }
});

/**
 * Redirect to twitch go version of page.
 */
function redirectToTwitchGo() {
  window.location = window.location.href.replace('www', 'go');
}
