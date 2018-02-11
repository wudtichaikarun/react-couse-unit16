import React from 'react'
import PropTypes from 'prop-types'
import { Comment } from 'Components'

const mapIdToComment = (comments, id) => {
  return comments.find(comment => comment.id === id)
}

const mapUserIdToUser = (users, userId) => {
  return users.find(user => user.id === userId)
}

const Comments = ({ commentIds, comments, users }) => (
  <div>
    {
      commentIds.map(id => { 
        const comment = mapIdToComment(comments, id)
        const user = mapUserIdToUser(users, comment.user)

        return <Comment key={id} message={comment.message} user={user.name} />
      })
    }
  </div>
)

Comments.propTypes = {
  commentIds: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  )
}

Comments.defaultProps = {
  commentIds: []
}

export default Comments
