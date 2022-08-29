import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CollectionList from '../collections/CollectionList'
import { useState } from 'react';
import { useGetSourceQuery } from '../../app/services/sourceApi';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#bcdeec' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary
}));

export default function SourceShow() {
  const [isShown, setIsShown] = useState(true)

  const params = useParams()
  const sourceId = Number(params.sourceId);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSourceQuery(sourceId);

  if (isLoading) {
    return (<h1>Loading...</h1>)
  }
  else {
    return (
        <div className="sourceTitle">
          <h1>{data.label}</h1>
          <div className="buttons">

          <div className="buttons">
            {/* Update Source */}
            <Button
              style={{ backgroundColor: "white" }}
              variant='contained'
              sx={{ my: 2.25, color: 'black', display: 'block' }}
              component={Link}
              to="modify-source"
            >
              Modify this Source
            </Button>

            { /* Shows the Source's Collections */}
            <Button
              style={{ backgroundColor: "white" }}
              variant='contained'
              sx={{ my: 2.25, color: 'black', display: 'block' }}
              onClick={async () => {
                setIsShown(!isShown)
              }}
            >
              {data.label}'s Collections
            </Button>
          </div>
        </div>

        <div className="sourceList">
          <Box sx={{ width: '100%' }}>

            <h1 className='aboutThisSource'>About this Source</h1>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <Item>Name: {data.name} </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <Item>Covered Since: {data.first_story} </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <Item>Homepage: {data.homepage} </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <Item>Stories per week: {data.stories_per_week} </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>Notes: {data.notes} </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>With Themes: </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>Publication Country: {data.pub_country} </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <Item>Publication State: {data.pub_state} </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <Item>Detected Primary Language: {data.primary_language} </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <Item>Detected Subject State:  </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <Item>Media Type: {data.media_type} </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
        <h3>Collections:</h3>
        <CollectionList sourceId={sourceId} />
      </div>
    )
  }
}