import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import SiteHeader from './site_header';
import SiteBanner from './site_banner';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
      <SiteHeader />
      <SiteBanner />
      <section id="one" className="wrapper">
				<div className="inner">
					<div className="flex flex-3">
						<article>
							<header>
								<h3>Use free association<br /> to discover new content</h3>
							</header>
							<p>Dont get stuck thinking in the box. Learn simple techniques that you can use to bring fresh content to your research project. </p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
						<article>
							<header>
								<h3>Organize your research materials<br /> and improve your workflow.</h3>
							</header>
							<p>The internet is a multimedia environment. Research Aid helps you organize your notes and attach embedded links videos, images, and audio. </p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
						<article>
							<header>
								<h3>Share your final product<br /> on social media</h3>
							</header>
							<p>When the research is complete, post your essay and send the link to friends, family, and colleagues. You can include the organized research as part of your deliverable.</p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
					</div>
				</div>
			</section>

			<section id="two" className="wrapper style1 special">
				<div className="inner">
					<header>
						<h2>The Four Stages</h2>
						<p>Master Your Research Process</p>
					</header>
					<div className="flex flex-4">
						<div className="box person">
							<div className="image round">
								<img src="../../style/images/pic03.jpg" alt="lightbulb" />
							</div>
							<h3>The Thesis</h3>
							<p>Whats Your Focus?</p>
						</div>
						<div className="box person">
							<div className="image round">
								<img src="../../style/images/pic04.jpg" alt="seeds" />
							</div>
							<h3>The Ideas</h3>
							<p>Whats Your Evidence?</p>
						</div>
						<div className="box person">
							<div className="image round">
								<img src="../../style/images/pic05.jpg" alt="roots" />
							</div>
							<h3>The Structure</h3>
							<p>Do The Ideas Connect?</p>
						</div>
						<div className="box person">
							<div className="image round">
								<img src="../../style/images/pic06.jpg" alt="tree" />
							</div>
							<h3>The Essay</h3>
							<p>How Does It Flow?</p>
						</div>
					</div>
				</div>
			</section>

			<section id="three" className="wrapper special">
				<div className="inner">
					<header className="align-center">
						<h2>Featured Essays</h2>
						<p>Check out some examples of how it works!</p>
					</header>
					<div className="flex flex-2">
						<article>
							<div className="image fit">
								<img src="../../style/images/pic01.jpg" alt="Pic 01" />
							</div>
							<header>
								<h3>The Cat-Cucumber Theory</h3>
							</header>
							<p>Why are cats terrified of cucumbers? Opinions on the matter differ depending on who you ask. Common sense might say that they think the cucumber looks like a snake, but cats are predators. Could there be something more mysterious happening here?</p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
						<article>
							<div className="image fit">
								<img src="../../style/images/pic02.jpg" alt="Pic 02" />
							</div>
							<header>
								<h3>Music Theory and Chemistry</h3>
							</header>
							<p>Music is a mysterious force. We know that there are many neurological processes triggered by listening to a song, but what other similarities can be found between chemsistry and music?</p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
					</div>
				</div>
			</section>

        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
