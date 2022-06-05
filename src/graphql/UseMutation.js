import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const UseMutation = () => {
  const [inputValue, setInputValue] = useState("");

  const ADD_TODO = gql`
    mutation ($input: CreatePostInput!) {
      createPost(input: $input) {
        id
        title
        body
      }
    }
  `;

  const [AddTodo, { data, loading, error }] = useMutation(ADD_TODO);

  const submitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      title: inputValue,
      body: inputValue,
    };

    AddTodo({
      variables: { input: newPost },
    });
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <h1>UseMutation</h1>
      <form>
        <input onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit" onClick={submitHandler}>
          submit
        </button>
      </form>
    </div>
  );
};

export default UseMutation;
