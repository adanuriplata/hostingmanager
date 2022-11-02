import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';

export default function Loader(): JSX.Element {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}
      style={{ minHeight: '100vh', backgroundColor: 'white', opacity: 0.55 }}
    >
      <Grid item xs={3}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}
