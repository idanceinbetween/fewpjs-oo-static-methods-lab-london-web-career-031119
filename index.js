class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let arr = string.split(" ")
    let newArr = new Array()
    newArr.push(this.capitalize(arr.shift()))

    let exclusion = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    arr.map(word => (exclusion.find(exc => exc == word)) ? newArr.push(word) : newArr.push(this.capitalize(word)))
    return newArr.join(" ")
  }
}
