const React = require('react');

const DefaultLayout = require('../layout/Default.jsx')
class Edit extends React.Component{
    render() {
      return (
        <DefaultLayout title="Edit User">
          <form action={`/users/${this.props.user._id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={this.props.user.name} /><br />
            Email: <input type="email" name="email" defaultValue={this.props.user.email} /><br />
            Age: <input type="number" name="age" defaultValue={this.props.user.age} /><br />
           Remember me:
              { this.props.user.rememberMe? <input type="checkbox" name="rememberMe" defaultChecked />: <input type="checkbox" name="rememberMe"/> }
          <br/>
            <input type="submit" value="Submit Changes" />
          </form>
        </DefaultLayout>
      )
    }
  }
  
  module.exports= Edit;