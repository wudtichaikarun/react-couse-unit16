import {
  CREATE_ARTICLE_SUCCESS,
  LOAD_ARTICLE_SUCCESS
} from 'Actions'

export default ( state={}, action) => {
  switch(action.type) {
    case LOAD_ARTICLE_SUCCESS:
    case CREATE_ARTICLE_SUCCESS:
      return action.payload.entities.comments
    default:
      return state
  }
}