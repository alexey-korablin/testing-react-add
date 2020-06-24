import React, { Component } from 'react';
import { connect } from 'react-redux';

import './app.scss';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { fetchPosts } from './actions';

const tempProps = [
  {
    fName: 'Joe',
    lName: 'Doe',
    email: 'joe_doe@example.com',
    age: 24,
    onlineStatus: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    this.props.fetchPosts();
  }

  render() {
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetchData,
    };
    const { posts } = this.props;
    return (
      <div className='app' data-testid='appComponent'>
        <Header></Header>
        <section className='main'>
          <Headline
            header='Posts'
            description='Click the button to render posts!'
            tempProps={tempProps}
          ></Headline>
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                description: body,
              };
              return <ListItem key={index} {...configListItem} />;
            })}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(App);

// export default App;
