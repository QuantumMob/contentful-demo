import React from 'react';
import axios from 'axios'
import Page from '../Contentful/Page'
import './Home.css';

class Home extends React.Component {
  state = {
    page: undefined
  }

  constructor(props) {
    super(props)
    axios.get('/api/contentful/home').then(result => {
      console.log('contentfulHome', result)
      this.setState({ page: result.data })
    })
  }

  render() {
    const { page } = this.state

    return (
      <div className="Home">
        <h2>Contentful Demo</h2>
        {page && <Page data={page}></Page>}
      </div>
    );
  }
}

export default Home;
