import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import * as stylex from '@stylexjs/stylex';

export const meta: MetaFunction = () => {
  return [
    { title: "Setting" },
  ];
};
export default function Setting() {
  return (
    <div>
      <h1 {...stylex.props(styles.title)}>Welcome to Setting</h1>
      <Link to="/">index</Link>
    </div>
  );
}

const styles = stylex.create({
  title: {
    color: "red",
  }
});