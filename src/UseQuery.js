import { gql, useQuery } from "@apollo/client";

function UseQuery() {
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
    variables: { id: 2 },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only", // Used for first execution
    nextFetchPolicy: "cache-first", // Used for subsequent executions
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  console.log(data);
  console.log("render");

  return (
    <div>
      <h1>UseQuery</h1>
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

export default UseQuery;
