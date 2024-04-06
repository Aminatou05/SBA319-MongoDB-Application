const React = require("react");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { cookies  } = this.props;
 

    return (
      <DefaultLayout title={"cookies Index Page"}>
        <nav>
          <a href="/cookies/new">Create a New Cookie</a>
        </nav>
        <ul>
          {cookies .map((cookie, i) => {
            return (
              <li>
                The{" "}
                <a href={`/cookies/${cookie._id}`}>{cookie.name}</a> is{" "}
                {cookie.color}  {cookie.quantity}<br></br>
                {cookie.readyToEat
                  ? `It is ready to eat`
                  : `It is NOT ready to eat`}
                <br />
                <a href={`/cookies/${cookie._id}/edit`}>
                  Edit This Cookie
                </a>
                <form
                  action={`/cookies/${cookie._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;