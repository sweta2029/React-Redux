import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePost, deletePost, retrievePosts } from "../actions/posts";
import PostDataService from "../services/PostService";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../data/db";
const Home = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const postID = id;
  const initialPostState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };
  const [currentPost, setCurrentPost] = useState(initialPostState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  console.log("test", data);
  const getPost = (id) => {
    if (id > 100) {
      console.log("list", data[id - 1]);
      setCurrentPost({
        id: data[id - 1].id,
        title: data[id - 1].title,
        body: data[id - 1].body,
        published: true,
      });
    } else {
      PostDataService.get(id)
        .then((response) => {
          setCurrentPost(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    getPost(postID);
  }, [postID]);

  //handleInput
  const handleInputItem = (event) => {
    const { name, value } = event.target;
    setCurrentPost({ ...currentPost, [name]: value });
  };
  //update status
  const updateStatus = (status) => {
    const data = {
      id: currentPost.id,
      title: currentPost.title,
      body: currentPost.body,
      published: status,
    };
    dispatch(updatePost(currentPost.id, data))
      .then((response) => {
        setCurrentPost({ ...currentPost, published: status });
        setMessage("statusupdated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  //update content
  const updateContent = () => {
    dispatch(updatePost(currentPost.id, currentPost))
      .then((response) => {
        setMessage("The post was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  //delete post
  const removePost = () => {
    dispatch(deletePost(currentPost.id))
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentPost ? (
        <div className="edit-form">
          <h4>Home</h4>
          <form className="mb-4">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentPost.title}
                onChange={handleInputItem}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Content</label>
              <input
                type="text"
                className="form-control"
                id="body"
                name="body"
                value={currentPost.body}
                onChange={handleInputItem}
              />
            </div>
          </form>

          {currentPost.published ? (
            <button
              className="btn btn-primary me-2"
              onClick={() => updateStatus(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="btn btn-primary me-2"
              onClick={() => updateStatus(true)}
            >
              Publish
            </button>
          )}

          <button className="btn btn-danger me-2" onClick={removePost}>
            Delete
          </button>

          <button
            type="submit"
            className="btn btn-success"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Post to edit...</p>
        </div>
      )}
    </div>
  );
};

export default Home;
