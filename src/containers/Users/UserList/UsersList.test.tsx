import React from "react";
import { shallow } from "enzyme";
import styles from "./UserList.module.scss";

import Users from "../../../mocks/Users";
import { List } from "./UserList";

const mockedProps = { selectUser: () => {} };

it("should display users", () => {
  const wrapper = shallow(<List data={Users} {...mockedProps} />);
  expect(wrapper.find(`.${styles.UsersItem}`)).toHaveLength(3);
});

it("should select user onclick", () => {
  let selected;
  const selectUser = (id: number) => {
    selected = id;
  };
  const wrapper = shallow(
    <List data={Users} selected={selected} selectUser={selectUser} />
  );
  wrapper
    .find(`.${styles.UsersItem}`)
    .first()
    .simulate("click");
  wrapper.setProps({ data: Users, selected, selectUser });
  expect(wrapper.find(`.${styles.active}`)).toHaveLength(1);
});
