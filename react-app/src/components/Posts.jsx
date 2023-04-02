import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Typography } from "@mui/material";
export function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        setPosts(response?.data?.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  console.log(posts);
  return (
    <>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Available Posts
        </Typography>
        <Grid container spacing={3}>
          {loading && (
            <Typography variant="h5" sx={{ mb: 2 }}>
              Loading...
            </Typography>
          )}
          {!loading &&
            posts?.map((post) => (
              <Grid item xs={12} key={post.id}>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body1">{post.body}</Typography>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}
