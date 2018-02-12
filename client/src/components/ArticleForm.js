import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'Components'
import styles from './ArticleForm.scss'

const ArticleForm =  ({ header, handleSubmit }) => (
  <form>
    <h2 className={styles.title}>{header}</h2>
    <div className={styles.group}>
      <label>Title</label>
      <Field component='input' type='text' name='title'/>
    </div>
    <div className={styles.group}>
      <label>Excerpt</label>
      <Field component='textarea' rows={3} name='excerpt'/>
    </div>
    <div className={styles.group}>
      <label>Content</label>
      <Field component='textarea' rows={5} name='content'/>
    </div>
    <div className={styles.button}>
      <Button onClick={handleSubmit}>{header}</Button>
    </div>
  </form>
)

ArticleForm.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

function validate(values) {
  let errors = {}

  if(!values.title) errors.title = 'Required.'
  if(!values.excerpt) errors.excerpt = 'Required.'
  if(!values.content) errors.content = 'Required.'

  return errors
}

export default reduxForm({
  form: 'article',
  validate
})(ArticleForm) 
