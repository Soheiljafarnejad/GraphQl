import { gql, useLazyQuery } from "@apollo/client";

const UseLazyQuery = () => {
  const GET_USER = gql`
    query ($id: ID!) {
      user(id: $id) {
        id
        email
        username
      }
    }
  `;

  const [getUser, { loading, error, data, refetch }] = useLazyQuery(GET_USER, {
    variables: { id: 1 },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  console.log(data);
  console.log("render");

  return (
    <div>
        <h1>UseLazyQuery</h1>
      {data && (
        <div>
          <p>{data.user.id}</p>
          <p>{data.user.username}</p>
          <p>{data.user.email}</p>
        </div>
      )}
      <button onClick={() => getUser({ variables: { id: 3 } })}>
        query to Api
      </button>
      <button onClick={() => refetch({ id: 2 })}>refetch</button>
    </div>
  );
};

export default UseLazyQuery;
