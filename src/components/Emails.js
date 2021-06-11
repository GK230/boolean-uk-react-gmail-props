import Email from './Email'
import '../Email.css'

function Emails(props) {
  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email
          email={email}
          index={index}
          toggleRead={props.toggleRead}
          toggleStar={props.toggleStar}
        />
      ))}
    </ul>
  )
}

export default Emails
