import compose from "compose-function";
import withStore from "./with-store";
import withRouter from "./with-router";

const withProviders = compose(withStore, withRouter);

export default withProviders;