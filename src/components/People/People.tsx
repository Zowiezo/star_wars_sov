import React, { useState, useEffect } from 'react';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import {
  CircularProgress,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';


const People = () => {
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(false);

  const [people, setPeople] = useState<Array<any>>([]);

  const swapi: string = `https://swapi.dev/api/people/?page=${page}`;

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
    <Grid container className='App'>
      <Grid item xs={12} className='App-header'>
        <Grid item style={{ padding: '1rem' }}>
          {page !== 1 && (
            <IconButton
              aria-label='delete'
              size='small'
              onClick={() => setPage(page - 1)}
            >
              <NavigateBefore fontSize='inherit' color='primary' />
            </IconButton>
          )}

          {page !== 9 && (
            <IconButton
              aria-label='delete'
              size='small'
              onClick={() => setPage(page + 1)}
            >
              <NavigateNext fontSize='inherit' color='primary' />
            </IconButton>
          )}
        </Grid>

        <Typography
          variant='h6'
          style={{ fontFamily: 'starjedi', marginBottom: '1rem' }}
        >
          {swapi}
        </Typography>

        {loading && <CircularProgress size='3rem' thickness={5} />}

        <Grid item xs={6} style={{ padding: '1rem' }}>
          {people.length > 0 &&
            people.map((person: any, index: number) => (
              <Typography key={index} style={{ fontFamily: 'starjhol' }}>
                {person.name}
              </Typography>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default People;