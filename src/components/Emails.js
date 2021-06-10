import Email from './Email'

function Emails() {
  return (
    <ul>
      {filteredEmails.map((email, index) => (
        <Email />
      ))}
    </ul>
  )
}

export default Emails
