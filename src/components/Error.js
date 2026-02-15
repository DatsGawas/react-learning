import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>404 - Page Not Found</h1>   
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Error Details: {err.status} - {err.statusText}</p>
    </div>
  );
}
export default Error;