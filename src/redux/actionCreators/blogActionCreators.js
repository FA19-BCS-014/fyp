import axios from "axios"
import {
  BLOG_FETCH_ALL,
  BLOG_FETCH_SINGLE,
  BLOG_FETCH_SINGLE_FAILED,
  BLOG_PAGINATION_FETCH_ALL,
} from "../actionTypes/blogActionTypes"
const url = process.env.REACT_APP_BACKEND_SERVER

export const fetchAllBlog = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  await axios
    .get(`${url}/blogs/?page_size=4`, config)
    .then((response) => {
      const data = response.data.results
      dispatch({
        type: BLOG_FETCH_ALL,
        payload: data,
      })
    })
    .catch((error) => {
      console.log(error.response)
    })
}

export const fetchAllPagniationBlog =
  (perPage, curPage = 1) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    await axios
      .get(`${url}/blogs/?page=${curPage}&page_size=${perPage}`, config)
      .then((response) => {
        const data = response.data
        dispatch({
          type: BLOG_PAGINATION_FETCH_ALL,
          payload: data,
        })
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

export const allBlogPaginationNavigate = (curPage) => async (dispatch) => {
  if (curPage !== null) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    await axios
      .get(curPage, config)
      .then((response) => {
        console.log(response.data)
        const data = response.data
        dispatch({
          type: BLOG_PAGINATION_FETCH_ALL,
          payload: data,
        })
      })
      .catch((error) => console.log("Blog Pagination Fetch error", error.response))
  } else {
    console.log("Blog Pagination Paginate error")
  }
}

export const fetchSingleBlog = (blog_slug) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  await axios
    .get(`${url}/blogs/${blog_slug}`, config)
    .then((response) => {
      const data = response.data
      console.log(data)
      dispatch({
        type: BLOG_FETCH_SINGLE,
        payload: data,
      })
    })
    .catch((error) => {
      console.log(error.response)
      dispatch({
        type: BLOG_FETCH_SINGLE_FAILED,
      })
    })
}
