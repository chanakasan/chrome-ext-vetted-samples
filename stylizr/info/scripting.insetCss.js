try {
  await chrome.scripting.insertCSS({
    css: items.css,
    target: {
      tabId: currentTab.id
    }
  });
  log('Injected style!')
} catch (e) {
  console.error(e);
  log('Injection failed. Are you on a special page?')
}