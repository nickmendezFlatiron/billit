const fetchPostEntry = async (formInfo, setMessages) => {
  const postReq = await fetch("/timesheets", {
    method: "POST",
    body: JSON.stringify(formInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await postReq.json();

  if (!postReq.ok) {
    setMessages(data);
    return false;
  } else {
    setMessages(["Upload Successful!"]);
    return data;
  }
};

export default fetchPostEntry;
