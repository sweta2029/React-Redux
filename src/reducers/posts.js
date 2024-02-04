import {
  CREATE_POST,
  RETRIEVE_POSTS,
  UPDATE_POST,
  DELETE_POST,
  RETRIVE_DATA,
  CREATE_DATA,
} from "../actions/types";

import { data } from "../data/db";

//const initialState = ;

const PostReducer = (posts = data, action) => {
  const { type, payload } = action;

  switch (type) {
    // case CREATE_DATA:
    //   return [...posts.];
    // case RETRIVE_DATA:
    //   return [...posts, (createdata = payload)];
    case CREATE_POST:
      //data.append(payload);
      return [...posts, payload];

    case RETRIEVE_POSTS:
      return;

    case UPDATE_POST:
      return posts.map((post) => {
        if (post.id === payload.id) {
          return {
            ...post,
            ...payload,
          };
        } else {
          return post;
        }
      });

    case DELETE_POST:
      return posts.filter(({ id }) => id !== payload.id);

    default:
      return posts;
  }
};

export default PostReducer;
