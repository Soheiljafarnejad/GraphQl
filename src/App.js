import { gql, useQuery } from "@apollo/client";
import "./App.css";

function App() {
  const GET_USER = gql`
    query ($id: ID!) {
      user(id: $id) {
        id
        email
        username
      }
    }
  `;

  const { loading, error, data, refetch } = useQuery(GET_USER, {
    variables: { id: 1 },
    pollInterval: 500,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  console.log(data);
  console.log("render");

  return (
    <div className="App">
      {data && (
        <div>
          <p>{data.user.id}</p>
          <p>{data.user.username}</p>
          <p>{data.user.email}</p>
        </div>
      )}
      <button onClick={() => refetch({ id: 2 })}>refetch</button>
    </div>
  );
}

export default App;
