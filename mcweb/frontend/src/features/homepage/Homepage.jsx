import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { assetUrl } from '../ui/uiUtil';
import SearchIcon from '@mui/icons-material/Search';

export default function Homepage() {
  return (
    <div id="homepage">

      <div className="feature-area">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>
                Titanic Research
                <br />
                securities analysis.
              </h1>
              <Link to="/search"><Button variant="contained" endIcon={<SearchIcon titleAccess="search online news and social media"/>}>Search Now</Button></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area filled">
        <div className="container">
          <div className="row">
            <div className="col-5 offset-1">
              <h2>Search Online News & Social Media</h2>
              <p>
                Our search tools let you author queries across media platforms,
                without having to worry about platform-specific search syntax.
              </p>
            </div>
            <div className="col-5">
              <img src={assetUrl('img/screenshot-search-ui.png')} alt="screenshot of online media search interface" width="100%" />
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area filled">
        <div className="container">
          <div className="row">
            <div className="col-5 offset-1">
              <h2>Search with Global Coverage</h2>
              <p>
                For online news related to a security, Titanic Research supports searching
                individual media sources, or across media sources grouped into collections.
              </p>
            </div>
            <div className="col-5">
              <img src={assetUrl('img/mc-country-coverage.png')} alt="heatmap visualization showing countries stories ahve come from" width="100%" />
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area">
        <div className="container">
          <div className="row">
            <div className="col-5 offset-1">
              <img src={assetUrl('img/screenshot-attention-over-time.png')} alt="line chart of attention in media" width="100%" />
            </div>
            <div className="col-5">
              <h2>Track Attention Over Time</h2>
              <p>
                Titanic Research shows you attention to an issue over time.  Our data can reveal key
                events that cause spikes in coverage and conversation.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
