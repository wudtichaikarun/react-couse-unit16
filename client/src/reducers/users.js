import {
  CREATE_ARTICLE_SUCCESS,
  LOAD_ARTICLE_SUCCESS
} from 'Actions'

export default (state=[], action) => {
  switch(action.type) {
    case LOAD_ARTICLE_SUCCESS:
    case CREATE_ARTICLE_SUCCESS:
      return action.payload.article.comments.map(
        comment => comment.user
      ).reduce(
        (result, user) => (
          result.find(u => u.id === user.id) ? result : [...result, user]
        ),[]
      )
    default: 
      return state
  }
}