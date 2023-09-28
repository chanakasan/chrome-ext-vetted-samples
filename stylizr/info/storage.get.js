storage.get(null, (data) => {
  // whole local storage object
  const value = data
})

storage.get('key', (data) => {
  // object with key and value
  const value = data.key
})

storage.get(['key1', 'key2'], (data) => {
  // object with key and value
  const value1 = data.key1
  const value2 = data.key2
  if (value1 && value2) {
    // do something
  }
})

storage.get({ key1: 'defaul1', key2: 'default2' }, (data) => {
  // object with key and value
  const value1 = data.key1
  const value2 = data.key2
  if (value1 === 'default1' && value2 === 'default2') {
    // do something
  }
})