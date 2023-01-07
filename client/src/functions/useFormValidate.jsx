const useFormValidate = (formData, setErrors) => {
  setErrors([])
  const {billing_date, is_billable, hours, billable_rate} = formData
  const errors = []
  if(billing_date.length < 0) {
    errors.push('Billing date is required.')
  }
  if((is_billable === true && parseFloat(billable_rate) === 0 )||( is_billable === "true" && parseFloat(billable_rate) === 0)) {
    errors.push("Please enter the billable rate.")
  }
  if(hours <= 0 ) {
    errors.push('Hours must be greater than 0.')
  } 

  Object.keys(formData).forEach(key => {
    if(formData[key].length === 0) {
      const name = key.split("_").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
      errors.push(`${name} is required.`)
    }
  })
  return errors.length === 0 ? true : setErrors([...errors]);
}

export default useFormValidate