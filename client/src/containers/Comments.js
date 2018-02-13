import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Comments } from 'Components'
import { getCommentsByIds } from 'Selectors'

const CommentsContainer = ({ comments, createComment }) => (
  <Comments comments={comments} createComment={createComment} />
)

Comments.propTypes = {
  commentIds: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ),
  createComment: PropTypes.func.isRequired 
}

Comments.defaultProps = {
  commentIds: []
}

export default connect(
  (state, props) => ({
    comments: getCommentsByIds(state, props)
  })
) (CommentsContainer)