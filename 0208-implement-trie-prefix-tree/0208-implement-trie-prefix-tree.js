var Trie = function () {
  this.childrenMap = {}
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this
  for (const c of word) {
    if (node.childrenMap[c] === undefined) {
      node.childrenMap[c] = new Trie()
    }
    node = node.childrenMap[c]
  }

  node.childrenMap[""] = new Trie()
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this
  for (const c of word) {
    if (node.childrenMap[c] === undefined) {
      return false
    }
    node = node.childrenMap[c]
  }

  return !!node.childrenMap[""]
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this
  for (const c of prefix) {
    if (node.childrenMap[c] === undefined) {
      return false
    }
    node = node.childrenMap[c]
  }

  return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
