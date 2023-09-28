export function getOptions(keys, cb) {
  storage.get(keys, function (data) {
    cb(data)
  })
}

export function removeOptions(keys, cb) {
  storage.remove(keys, function() {
    cb()
  })
}

export function saveOptions(data, cb) {
  storage.set(data, function() {
    cb()
  })
}

export function dangerouslyClearStorage(cb) {
  storage.clear(data, function() {
    cb()
  })
}