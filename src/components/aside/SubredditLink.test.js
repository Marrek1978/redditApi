import { render, screen } from "@testing-library/react";
import SubredditLink from "./SubredditLink";
import SubredditList from "./SubredditList";
import { Provider } from "react-redux";
import store from "../../app/store.js";
import '@testing-library/jest-dom';
import {toBeInTheDocument} from '@testing-library/jest-dom';


test('List renders with "test"', () => {
  render(
    <>
      <Provider store={store}>
        <div>test2</div> 
        <SubredditLink />
      </Provider>
    </>
  );
  const textElement = screen.query("test2");
  expect(textElement).toBeInTheDocument();
});