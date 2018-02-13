import React from 'react'
import PropTypes from 'prop-types'
import { Comment } from 'Components'

const Comments = ({ comments, createComment }) => {
 console.log("comments is =",comments)
 return(<div>
    {
      Object.keys(comments).map(id => {
        const { message, user } = comments[id]

        return <Comment key={id} message={message} user={user.name} />
      })
    }
  </div>)
}

Comments.propTypes = {
  comments: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  )
}

export default Comments