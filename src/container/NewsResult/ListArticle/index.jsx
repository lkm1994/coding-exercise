import { Avatar, Chip, Grid } from "@mui/material";
import React from "react";

const ListArticleComponent = (props) => {
  return (
    <Grid container>
      <Grid container direction={"row"} spacing={2}>
        <Grid item xs={4}>
          <img
            src={props.data.fields.thumbnail}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={8}>
          <div style={{marginTop: '1%', marginBottom: '15%'}}>
            {props.data.webTitle ? (
              <a href={props.data.webUrl}>{props.data.webTitle}</a>
            ) : (
              ""
            )}
          </div>
          <div>
            {props.data && props.data.tags
              ? props.data.tags.map((tag) => {
                  return (
                    <Chip
                      sx={{ margin: "2px" }}
                      key={tag.id}
                      avatar={<Avatar>{tag.sectionName[0]}</Avatar>}
                      label={tag.sectionName}
                    />
                  );
                })
              : null}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListArticleComponent;
