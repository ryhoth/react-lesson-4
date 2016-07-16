import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content } ,handleSubmit } = this.props;
    // const handleSubmit = this.props.handleSubmit
    // title = this.props.fields.title

    return (
      <form onSubmit={handleSubmit}>Create From
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">submit</button>
      </form>
    );
  }
}

export default reduxForm ( {
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
} )(PostsNew);
