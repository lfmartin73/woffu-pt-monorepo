import "bootstrap/dist/css/bootstrap.css";
import "../fontawesome";
import { BetAdmin } from "../components/bet-admin.component";

export default function Web() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary sticky-top">
        <div className="container">
          <h1 className="text-white">Woffu</h1>
          <p className="text-muted">Technical test.</p>
        </div>
      </nav>

      <div className="container">
            <BetAdmin />
      </div>
    </>
  );
}
