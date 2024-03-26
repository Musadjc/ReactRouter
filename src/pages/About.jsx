import { useParams } from "react-router-dom"

function About() {
    const {id}= useParams()
  return (
    <div>
      <h1>Hellou  user: {id}</h1>
    </div>
  )
}

export default About
