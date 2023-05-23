export const getYoutubeUrl = (string) => {
    const word = '&list'

    if (string.includes(word)) {
        const listIndex = string.indexOf(word)

        return string.slice(0, listIndex)
    } else {
        return string
    }
}