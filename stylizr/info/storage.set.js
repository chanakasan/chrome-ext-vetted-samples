storage.set({ key1: 'defaul1', key2: 'default2' }, (data) => {
  // object with key and value
  const value1 = data.key1
  const value2 = data.key2
  if (value1 === 'default1' && value2 === 'default2') {
    // do something
  }
})