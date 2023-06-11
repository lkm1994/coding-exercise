import { Grid, Pagination, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ListArticleComponent from "./ListArticle";
import { updateLoaderState } from "../../utils/AppStore/actions";
import Actions from "../NewsLister/actions";
import {
  API_URLS,
  DEFAULT_PAGE_SIZE,
  HTTPS_HEADERS,
  REQUEST_METHODS,
} from "../../utils/constants";

const NewsListerResult = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const propsState = useSelector((state) => {
    return {
      searchResult: state.newsListerReducer.searchResult,
      searchInput: state.newsListerReducer.searchInput,
    };
  });
  useEffect(() => {
    if (!propsState.searchResult) {
      navigate("/news-lister");
    }
  }, []);
  const handlePaginationChange = (event, value) => {
    const url = `${API_URLS.SEARCH_NEWS_LISTER}&q=${
      propsState.searchInput ? propsState.searchInput : ""
    }&show-fields=thumbnail,headline&page=${value}&page-size=${DEFAULT_PAGE_SIZE}&show-tags=keyword`;
    dispatch(updateLoaderState(true));
    dispatch(
      Actions.searchNewsLister({
        requestType: REQUEST_METHODS.GET,
        headers: HTTPS_HEADERS,
        url: url,
      })
    );
  };
  useEffect(() => {
    if (propsState.searchResult) {
      dispatch(updateLoaderState(false));
    }
  }, [propsState.searchResult]);
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", color: "#9c27b0" }}>
        <h1>
          Search Result for "
          {propsState.searchInput ? propsState.searchInput : ""}"
        </h1>
      </div>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Paper
          elevation={3}
          sx={{
            width: "70%",
            height: "55vh",
            overflowY: "auto",
            overflowX: "hidden",
            margin: "2%",
            padding: "2%",
          }}
        >
          {propsState.searchResult &&
            propsState.searchResult.results.map((result) => {
              return (
                <Paper
                  elevation={3}
                  sx={{
                    width: "100%",
                    marginTop: "1%",
                    marginBottom: "1%",
                    padding: "1%",
                  }}
                >
                  <ListArticleComponent data={result} />
                </Paper>
              );
            })}
        </Paper>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
            padding: "2%",
          }}
        >
          {propsState.searchResult &&
          propsState.searchResult.results.length > 0 ? (
            <Pagination
              count={propsState.searchResult.pages}
              onChange={handlePaginationChange}
            />
          ) : null}
        </Paper>
      </Grid>
    </>
  );
};

export default NewsListerResult;
