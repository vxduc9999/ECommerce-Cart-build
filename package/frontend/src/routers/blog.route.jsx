import React from "react";
import { Route, Switch } from "react-router-dom";
import BlogPage from "../pages/Blogpage/blog.page";
import { PATH } from "../constants/PATH";

function BlogRoute() {
  return (
    <Switch>
      <Route
        exact
        path={PATH.BLOG}
        component={() => (
          <BlogPage />
          // <Suspense fallback={<Loading />}>
          //     <Login />
          // </Suspense>
        )}
      />
    </Switch>
  );
}

export default BlogRoute;
