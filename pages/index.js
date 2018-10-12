import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const ArtistsLink = (props) => (
  <li>
    <Link as={`/artists/${props.id}`} href={`/artists?id=${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
)

const Index = (props) => {
  return <Layout>
  <h1>Artists</h1>
  <ul>
    {
       props.artists && props.artists.map(item => {
         return <ArtistsLink key={item.id} id={item.id} name={item.name}/>
       })
    }
  </ul>
</Layout>
}


Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:4000/top/artists?offset=0&limit=30')
  const data = await res.json()

  return {
    artists: data.artists
  }
}

export default Index