import { createSelector } from 'reselect'
import { getUsersByIds } from 'Selectors'

// find from comments state
const commentsByIds = ({ comments }, { commentIds }) => 
  Object
    .entries(comments)
    .filter(([k, v]) => commentIds.includes(+k))
    .reduce((result, [k, v]) => ({ ...result, [k]: v}), {})

// find from users state 
const usersByCommentIds = (state, props) => 
  getUsersByIds(
    state, {
      userIds: Object
        .values(commentsByIds(state, props))
        .map(comment => comment.user)
    }
  )

export function getComments(state) {
  return state.comments
}
  
export const getCommentsByIds = createSelector(
  commentsByIds,
  usersByCommentIds,
  (comments, users) => 
    Object.entries(comments).reduce(
      (result, [k, v]) => ({
        ...result,
        [k]: { ...v, user: users[v.user] }
      }),{}
    )
)
