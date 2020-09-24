function textLength(inputText) {
    const withSpaces = inputText.length
    const withoutSpaces = inputText.replace(/\s+/g, '').length
  
    return { withSpaces: withSpaces, withoutSpaces: withoutSpaces }
}

export default { textLength }