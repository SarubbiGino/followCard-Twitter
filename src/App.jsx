import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

// This is a list of users that will be displayed on the screen
const users = [
  {
    userName: 'PacoBarel',
    Text: 'PacoBarel',
  },
  {
    userName: 'Miguel Angel Duran',
    Text: 'midudev',
  },
  {
    userName: 'Elon Musk',
    Text: 'elonmusk',
  },
]

function App() {
  return (
   <div className="App">
      {
        users.map((user) => {
          return <TwitterFollowCard
          key={user.userName} 
          userName={user.userName} 
          Text={user.Text} />
        }
        )
      }
   </div>
  )
}

export default App
