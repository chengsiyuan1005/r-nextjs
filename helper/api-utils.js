// list-data
export async function getListData() {
  const response = await fetch('https://mock.apifox.cn/m1/3421431-0-default/list-data')
  const data = await response.json()
  return data
}

export async function getFeatureListData() {
  let getData = await getListData()
  return getData
}

export async function getByIdListData(id) {
  let byId = await getListData()
  return byId.filter(item => item.id === id)[0]
}


// year-month
export async function getAllDate() {
  const response = await fetch('https://mock.apifox.cn/m1/3421431-0-default/year-month?year=2022&month=12')
  const data = await response.json()
  return data
}

export async function getFilterDate(year, month) {
  if (year === '2023') return 500
  const byYearAndMonth = await getAllDate()
  return byYearAndMonth.filter(item => item.year === year && item.month === month)
}