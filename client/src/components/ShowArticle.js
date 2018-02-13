import React from 'react'
import PropTypes from 'prop-types'
import { Button, Comments } from 'Components'
import styles from './ShowArticle.scss'

const ShowArticle = ({
  article,
  deleteArticle,
  createComment,
  comments,
  users
}) => (
  <div>
    <h2>{article.title}</h2>
    <p>{article.content}</p>
    <div className={styles.buttons}>
      <Button to={`/articles/${article.id}/edit`}>Edit</Button>
      <Button onClick={deleteArticle}>Delete</Button>
    </div>
    <hr />
    <Comments 
      createComment={createComment}
      commentIds={article.comments} 
      comments={comments} 
      users={users} />
  </div>
) 

ShowArticle.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  comments: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  users: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ),
  createComment: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired
}

export default ShowArticle