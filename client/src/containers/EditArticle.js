import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import { editArticle, loadArticle } from 'Actions'
import { getArticle } from 'Selectors'
import { ArticleForm } from 'Components'

class EditArticle extends PureComponent {
  componentDidMount() {
    this.props.loadArticle()
  }

  render() {
    const { editArticle, article }=this.props

    return (
      <ArticleForm 
        initialValues={article}
        header='Edit Article' 
        onSubmit={editArticle} />
    )
  }
}

export default compose(
  withRouter,
  connect(
    (state, props) => ({
      article: getArticle(state, props)
    }),
    (dispatch, { match, history }) => ({
      editArticle(value) {
        dispatch(editArticle(match.params.id, value))
        history.push('/articles')
      },
      loadArticle() {
        dispatch(loadArticle(match.params.id))
      }
    })
  )
)(EditArticle)
