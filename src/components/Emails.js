import Email from './Email'
import '../Email.css'

function Emails(props) {
  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email email={email} index={index} />
      ))}
    </ul>
  )
}

export default Emails
