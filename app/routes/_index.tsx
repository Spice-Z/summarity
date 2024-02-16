import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import * as stylex from '@stylexjs/stylex';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix (SPA Mode)</h1>
      <ul>
        <li>
          <Link to="/setting">setting</Link>
        </li>
      </ul>
    </div>
  );
}

const styles = stylex.create({
});