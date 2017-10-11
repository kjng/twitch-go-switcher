chrome.storage.sync.get('twitch_go_switcher', (items) => {
    var status = items.twitch_go_switcher;

    // If just installed without explicitly enabling in the extension popup, enable by default
    if (!status) {
        chrome.storage.sync.set({
            twitch_go_switcher: 'enable'
        });
        redirectToTwitchGo();
    }

    if (status === 'enable') {
      redirectToTwitchGo();
    }
});

function redirectToTwitchGo() {
  window.location = window.location.href.replace('www', 'go');
}
