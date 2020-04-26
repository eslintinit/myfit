import Layout from 'components/Layout'

export default () => (
  <Layout>
    <div style={{ marginBottom: 24 }}>Favorites</div>
  </Layout>
)
// query {
//   allWorkouts(filter: {
//     url: { in: ["core", "triceps"] }
//   }) {
//     id
//     name
//   }
// }
