export function getArticle(state, props) {
  return state.articles.items[+props.match.params.id]
}

export function getArticles(state) {
  return Object.values(state.articles.items)
}

export function getIsArticleLoading(state) {
  return state.articles.isLoading
}