/* eslint-disable no-restricted-globals */
import React, { useRef } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

// Components
import Layout from "../components/layout";
import ContentWrapper from "../components/layouts/ContentWrapper";

// Queries
import { GET_USERS, GET_PETS, ADD_USER, DELETE_USER } from "../api/queries";

const IndexPage = () => {
  // React Hooks
  const inputName = useRef(null);
  const inputEmail = useRef(null);

  // Query Hooks
  const {
    loading: qUsersLoading,
    error: qUsersError,
    data: qUsersData
  } = useQuery(GET_USERS);
  const {
    loading: qPetsLoading,
    error: qPetsError,
    data: qPetsData
  } = useQuery(GET_PETS);

  // Mutation Hooks
  const [mAddUser] = useMutation(ADD_USER);
  const [mDeleteUser] = useMutation(DELETE_USER);

  // Functions
  const deleteUser = userId => {
    mDeleteUser({
      variables: {
        id: userId
      },
      refetchQueries: () => [{ query: GET_USERS }]
    });
  };
  const addUser = () => {
    mAddUser({
      variables: {
        name: inputName.current.value,
        email: inputEmail.current.value
      },
      refetchQueries: () => [{ query: GET_USERS }]
    });
    inputName.current.value = "";
    inputEmail.current.value = "";
  };

  console.log(qUsersData);
  console.log(qPetsData);

  if (qUsersLoading || qPetsLoading) return <p>Loading</p>;
  if (qUsersError || qPetsError) return <p>error</p>;
  // Load Data
  return (
    <Layout homepage>
      <ContentWrapper>
        <input ref={inputName} type="text" />
        <input ref={inputEmail} type="text" />
        <button type="button" onClick={addUser}>
          Add User
        </button>
        {typeof qUsersData !== "undefined" &&
          qUsersData.users.map(user => (
            <>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <button type="button" onClick={() => deleteUser(user.id)}>
                X
              </button>
            </>
          ))}
        {typeof qPetsData !== "undefined" &&
          qPetsData.pets.map(pet => (
            <>
              <p>{pet.name}</p>
            </>
          ))}
      </ContentWrapper>
    </Layout>
  );
};

export default IndexPage;
