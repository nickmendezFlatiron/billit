const fetchPostEntry = async (formInfo) => {
  const postReq = await fetch('/timesheets',{
    method: 'POST',
    body: JSON.stringify(formInfo),
    headers: {
      "Content-Type": "application/json"
    }
  })
  console.log(postReq.ok)
  const res = await postReq.json()
  console.log(res)
}

export default fetchPostEntry