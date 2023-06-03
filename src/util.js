export const getYoutubeUrl = string => {
  const word = '&list'

  if (string.includes(word)) {
    const listIndex = string.indexOf(word)

    return string.slice(0, listIndex)
  } else {
    return string
  }
}

const bankList = [
  {
    bankCode: '002',
    bankName: 'ธนาคารกรุงเทพ',
    bankLogo: 'bbl.png'
  },
  {
    bankCode: '011',
    bankName: 'ธนาคารทหารไทยธนชาต',
    bankLogo: 'ttb.png'
  },
  {
    bankCode: '014',
    bankName: 'ธนาคารไทยพาณิชย์',
    bankLogo: 'scb.png'
  }
]

export const searchBank = bankCode => {
  const fakeBank = {
    bankCode: '001',
    bankName: 'ธนาคารแห่งประเทศไทย',
    bankLogo: 'bank.png'
  }

  const foundBank = bankList.find(element => element.bankCode === bankCode)

  if (!foundBank) {
    return fakeBank
  } else {
    return foundBank
  }
}

const twoDigits = stat => {
  const string = stat + ''

  if (string.length < 2) {
    return `0${string}`
  } else {
    return string
  }
}

export const getDate = object => {
  let date = ''

  if (!object) {
    const dNow = new Date()

    const day = twoDigits(dNow.getDate())
    const month = twoDigits(dNow.getMonth() + 1)
    const year = dNow.getFullYear()
    const hour = twoDigits(dNow.getHours())
    const minute = twoDigits(dNow.getMinutes())

    date = `${day}/${month}/${year} ${hour}:${minute}`
  } else {
    const { $D, $M, $y, $H, $m } = object

    const day = twoDigits($D)
    const month = twoDigits($M + 1)
    const year = $y
    const hour = twoDigits($H)
    const minute = twoDigits($m)

    date = `${day}/${month}/${year} ${hour}:${minute}`
  }

  return date
}
