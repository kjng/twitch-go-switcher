chrome.storage.sync.get('twitch_go_switcher', (items) => {
    if (items.twitch_go_switcher === 'enable') {
      console.log('Redirecting to twitch go.');
      redirectToTwitchGo();
    }
});

function redirectToTwitchGo() {
  window.location = window.location.href.replace('www', 'go');
}
