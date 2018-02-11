import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { loadArticle, deleteArticle } from 'Actions'
import { Button, Comments, Loading } from 'Components'
import styles from './ShowArticle.scss'

class ShowArticle extends PureComponent {
  componentDidMount() {
    this.props.loadArticle()
  }

  render() {
    const { article,comments,users, deleteArticle } = this.props

    if(article) {
      return (
        <div>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <div className={styles.buttons}>
            <Button to={`/articles/${article.id}/edit`}>Edit</Button>
            <Button onClick={deleteArticle}>Delete</Button>
          </div>
          <hr />
          <Comments 
            // createComment={createComent}
            commentIds={article.comments} 
            comments={comments} 
            users={users} />
        </div>
      )
    } else {
      return <Loading />
    }
  }
}

export default compose(
  withRouter,
  connect(
    ({ articles: { items }, comments, users }, { match }) => ({
      article: items[+match.params.id],
      comments,
      users
    }),
    (dispatch, { match: { params }, history }) => ({
      loadArticle() {
        dispatch(loadArticle(params.id))
      },
      deleteArticle() {
        dispatch(deleteArticle(params.id))
        history.push('/articles')
      }
    })
  )
)(ShowArticle)
