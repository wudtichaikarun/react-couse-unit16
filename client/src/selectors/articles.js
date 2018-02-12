import { createSelector } from 'reselect'

export function getArticle(state, props) {
  return state.articles[+props.match.params.id]
}

/*
 OLD function
export function getArticles(state) {
  return Object.values(state.articles.items)
}

NEW function use libary 
    Memozied selectors
*/
export const getArticles = createSelector(
  state => state.articles,
  articles => Object.values(articles)
)