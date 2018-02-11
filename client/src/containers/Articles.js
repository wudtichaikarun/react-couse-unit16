import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { loadArticles } from 'Actions'
import { Article, Button, Loading } from 'Components'
import styles from './Articles.scss'

class Articles extends PureComponent {
  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    const { isLoading, isLoggedIn, articles } = this.props

    return (
      <div className={styles.container}>
        {isLoading && <Loading />}
        {isLoggedIn && (
          <div className={styles['new-article']}>
            <Button to='/articles/new'>New Article</Button>
          </div>
        )}
        <hr />
        {
          articles.map(
            article =>
              <Article key={article.id} {...article} />
            )
        }
      </div>
    )
  }
}

export default connect(
  ({ articles, auth }) => ({
    articles: articles.items,
    isLoading: articles.isLoading,
    isLoggedIn: !!auth.token
  }),
  { loadArticles }
)(Articles)

