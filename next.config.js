const fetch = require('isomorphic-unfetch')

module.exports = {
  exportPathMap: async function () {
    const res = await fetch('http://localhost:4000/top/artists?offset=0&limit=30')
    const data = await res.json()
    let paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }

    data.artists.map(item => {
      paths[`/artists/${item.id}`] = {
        page: '/artists',
        query: {
          id: item.id
        }
      }
    })
    
    return paths
  }
}