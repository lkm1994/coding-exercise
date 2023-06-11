import { Paper, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputField from "../../components/InputField";
import "./style.css";
import ButtonComponent from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import Actions, { NEWS_LISTER_ACTION_TYPES, action } from "./actions";
import {
  API_URLS,
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  HTTPS_HEADERS,
  REQUEST_METHODS,
} from "../../utils/constants";
import { updateLoaderState } from "../../utils/AppStore/actions";
import { useNavigate } from "react-router-dom";
const NewsLister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const propsState = useSelector((state) => {
    return {
      searchResult: state.newsListerReducer.searchResult,
      searchResultFailure: state.newsListerReducer.searchResultFailure,
    };
  });
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const searchHandleChange = (event) => {
    setSearchInput(event.target.value);
    dispatch(
      action(NEWS_LISTER_ACTION_TYPES.SET_SEARCH_INPUT, event.target.value)
    );
  };
  const handleSearchClick = () => {
    const url = `${API_URLS.SEARCH_NEWS_LISTER}&q=${searchInput}&show-fields=thumbnail,headline&page=${page}&page-size=${pageSize}&show-tags=keyword`;
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
      navigate("/news-lister-search-list");
    }
  }, [propsState.searchResult]);
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", color: "#9c27b0" }}>
        <h1>NEWS LISTER</h1>
      </div>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Paper elevation={3} sx={{ width: "50%", margin: "2%", padding: "2%" }}>
          <Grid
            container
            direction="row"
            spacing={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid item xs="10">
              <InputField
                style={{ width: "100%" }}
                id="newsLister"
                label={"Search News Lister"}
                handleChange={searchHandleChange}
                className="search-box"
                value={searchInput ? searchInput : ""}
              />
            </Grid>
            <Grid item xs="2">
              <ButtonComponent
                variant="contained"
                label="Search"
                id="searchNewsLister"
                handleOnClick={handleSearchClick}
                disable={searchInput ? false : true}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default NewsLister;
