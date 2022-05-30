functionName = async () => {
  try {
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
  } catch (err) {
    console.log('请求出错', err)
  }
}
