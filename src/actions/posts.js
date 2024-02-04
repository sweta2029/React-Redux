import { CREATE_POST, RETRIEVE_POSTS, UPDATE_POST, DELETE_POST } from "./types";

import PostDataService from "../services/PostService";
import { data } from "../data/db";
export const createPost =
  (title, body, userId = 1) =>
  async (dispatch) => {
    try {
      const res = await PostDataService.create({ title, body, userId });
      dispatch({
        type: CREATE_POST,
        payload: { title, body, userId, id: data.length + 1 },
      });
      data.push(res.data);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrievePosts = () => async (dispatch) => {
  try {
    const res = await PostDataService.getAll();

    dispatch({
      type: RETRIEVE_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, data) => async (dispatch) => {
  try {
    const res = await PostDataService.update(id, data);

    dispatch({
      type: UPDATE_POST,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await PostDataService.remove(id);

    dispatch({
      type: DELETE_POST,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
