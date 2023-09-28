storage.remove('key', (data) => {
  // do something after remove key
})

storage.remove(['key1', 'key2'], (data) => {
  // do something after remove key1 and key2
})

storage.clear(() => {
  // do somthing after clearing all storage
})