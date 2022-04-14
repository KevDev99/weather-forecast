const CurrentDateTime = () => {
  const currentDate = new Date(); 
  var dateTime = currentDate.toUTCString();
  return (
    <span className="datetime">{dateTime}</span>
  )
}

export default CurrentDateTime;