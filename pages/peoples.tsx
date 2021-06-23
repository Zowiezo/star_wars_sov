import React, { useState, useEffect } from 'react';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import {
  CircularProgress,
  Grid,
  IconButton,
  Typography,
  Paper
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import globalStyles from '../pages/client/src/styles/global.styles';


//import './index.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      backgroundColor: '#201d1d',

    },
    appheader: {
      backgroundColor: '#201d1d',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
    },
  }),
);
<style global jsx>
{globalStyles}
</style>
const People = () => {
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(false);

  const [people, setPeople] = useState<Array<any>>([]);


  const swapi: string = `https://swapi.dev/api/people/?page=${page}`;
  const classes = useStyles();

  const getPeople = async () => {
    setLoading(true);

    try {
      const fetchData = await fetch(swapi);
      const data = await fetchData.json();

      setPeople(data.results);
      setLoading(false);

      return data.results;
    } catch (error) {
      alert(`Throwing ${error}`);
      throw error;
    }
  };

  useEffect(() => {
    getPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Grid container className={classes.appheader}>
      <Grid item xs={12} className='App-header'>
        <Grid item style={{ padding: '1rem' }}>
          {page !== 1 && (
            <IconButton
              aria-label='delete'
              font-size='large'
              onClick={() => setPage(page - 1)}
            >
              <NavigateBefore fontSize='inherit' color='primary' />
            </IconButton>
          )}

          {page !== 9 && (
            <IconButton
              aria-label='delete'
              font-size='large'
              onClick={() => setPage(page + 1)}
            >
              <NavigateNext fontSize='inherit' color='primary' />
            </IconButton>
          )}
        </Grid>

        <Typography
          variant='h6'
          style={{ fontFamily: 'starjedi', marginBottom: '1rem', textAlign:'center' }}
        >
          {swapi} <br /> Star wars
        </Typography>

        {loading && <CircularProgress size='3rem' thickness={5} />}
        <Paper className={classes.paper}>
        <Grid item xs={6} style={{ padding: '1rem' }}>

          {people.length > 0 &&
            people.map((person: any, index: number) => (
              <><Typography gutterBottom variant="subtitle1" key={index} style={{
                fontFamily: 'Opens Sans',
                alignItems: "center",
                fontSize: "large",
                color: "green"
              }}>
                {person.name}
              </Typography>

              <Typography key={index} style={{
                fontFamily: 'Open Sans',
                textAlign: "center",
                fontSize: "medium",
                color: 'whitesmoke'

              }}>
                  {person.gender}
                  <span> </span>
                  {person.mass}
                  <span> </span>
                  {person.height}
                  <span> </span>
                  {person.homeworld}
                  <br />
                  <br />
                </Typography></>

            ))}
        </Grid>
        </Paper>
      </Grid>
    </Grid>
  );

};

export default People;
