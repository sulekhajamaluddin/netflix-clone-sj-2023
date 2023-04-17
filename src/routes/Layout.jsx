// good but this is not a route but a component
export default function Layout({ state }) {
  return (
    <>
      {state.navbar}
      {state.component}
    </>
  );
}
