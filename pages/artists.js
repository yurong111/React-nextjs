import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

 const Artists = (props) => {
     console.log('props', props)
     return <Layout>
     <div>{props.singer.briefDesc}</div>
  </Layout>
 }

 Artists.getInitialProps = async function({query}) {
    const res = await fetch(`http://localhost:4000/artist/desc?id=${query.id}`)
    const data = await res.json()
    return {
      singer: data,
    }
  }

export default Artists
