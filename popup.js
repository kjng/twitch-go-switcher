function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;

    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

function getSavedExtensionState(callback) {
  chrome.storage.sync.get('twitch_go_switcher', (items) => {
    console.log(items);
    callback(chrome.runtime.lastError ? null : items['twitch_go_switcher']);
  });
}

function saveExtensionState(status) {
  chrome.storage.sync.set({
    twitch_go_switcher: status
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var dropdown = document.getElementById('dropdown');

    getSavedExtensionState((status) => {
      console.log('Got status: ' + status);
      if (status) {
        dropdown.value = status;
      }
    });

    dropdown.addEventListener('change', () => {
      console.log('Dropdown changed: ' + dropdown.value);
      saveExtensionState(dropdown.value);
    });
  });
});
