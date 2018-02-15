import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { loadArticle, deleteArticle } from 'Actions'
import { Loading ,ShowArticle } from 'Components'
import { getComments, getUsers, getArticle } from 'Selectors'


class ShowArticleContainer extends PureComponent {
  componentDidMount() {
    this.props.loadArticle()
  }

  render() {
    const { article,comments,users, deleteArticle } = this.props

    if(article) {
      return (
        <ShowArticle
        article={article}
        deleteArticle={deleteArticle}
        comments={comments}
        users={users} />
      )
    } else {
      return <Loading />
    }
  }
}

export default compose(
  withRouter,
  connect(
    (state, props) => ({
      article: getArticle(state, props),
      comments: getComments(state) ,
      users: getUsers(state)
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
)(ShowArticleContainer)
