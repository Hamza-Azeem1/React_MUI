import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material"
import { PhotoCamera } from "@mui/icons-material"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm' sx={{ marginTop: '100px' }}>
            <Typography variant="h2" align="center" color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color='textSecondary' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque adipisci, ullam dolore numquam voluptas molestiae culpa saepe fugiat aut?
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Like my Photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md" sx={{ marginTop: '50px', marginBottom: '50px' }}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia image="https://source.unsplash.com/random" title='image title' sx={{ height: '200px', width: 'full' }} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, possimus.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" variant="contained">View</Button>
                    <Button size="small" color="primary" variant="contained">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color='textSecondary' sx={{ marginBottom: '70px' }}>
          Lorem ipsum dolor sit amet.
        </Typography>
      </footer>
    </>
  )
}

export default App
