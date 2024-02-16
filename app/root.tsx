import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./index.css";
import * as stylex from '@stylexjs/stylex';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div {...stylex.props(styles.container)}>
          <div {...stylex.props(styles.leftContainer)}>
            <div>
              <p>File</p>
            </div>
            <div>
              <p>File</p>
            </div>
            <div>
              <p>File</p>
            </div>
          </div>
          <div {...stylex.props(styles.mainContainer)}>
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <p>Loading...</p>
        <Scripts />
      </body>
    </html>
  );
}

const styles = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
  },
  leftContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  }
});