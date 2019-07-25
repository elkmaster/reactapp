import React from "react";
import { shallow } from "enzyme";
import { Users } from "./Users";
import { default as UsersMock } from "../../mocks/Users";
import List from "./UserList/UserList";

const mockedProps = { fetchUsers: () => {} };

it("should show loading state", () => {
  const wrapper = shallow(<Users {...mockedProps} data={[]} loading={true} />);
  expect(wrapper.text()).toContain("Loading...");
});

it("should display user list component", () => {
  const wrapper = shallow(
    <Users {...mockedProps} data={UsersMock} loading={false} />
  );
  expect(wrapper.find(List)).toHaveLength(1);
});
