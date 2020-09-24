function textLength(inputText) {
    const withSpaces = inputText.length
    const withoutSpaces = inputText.replace(/\s+/g, '').length
  
    return { withSpaces: withSpaces, withoutSpaces: withoutSpaces }
}

function wordCount(inputText){
    const matches = inputText.match(/[\w\d\’\'-]+/gi)
    return matches ? matches.length : 0
}

export default { textLength, wordCount }