
export async function getListData() {
  const response = await fetch('https://mock.apifox.cn/m1/3421431-0-default/list-data')
  const data = await response.json()
  return data
}

export async function getFeatureListData() {
  let getData = await getListData()
  return getData
}