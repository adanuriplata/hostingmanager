// import LinearProgress from '@mui/material/CircularProgress';
import { Grid, CircularProgress } from '@mui/material';

export default function Loader(): JSX.Element {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}
      style={{ minHeight: '100vh', backgroundColor: 'rgba(0,0,0,.2)' }}
    >
      <Grid item xs={3}>
        <CircularProgress size={70} thickness={2.5} />
      </Grid>
    </Grid>
  );
}
