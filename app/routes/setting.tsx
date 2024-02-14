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
    <div {...stylex.props(styles.container)}>
      <h1>Welcome to Setting</h1>
      <Link to="/">index</Link>
    </div>
  );
}

const styles = stylex.create({
  container: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: 1.8,
    color:'red'
  }
});