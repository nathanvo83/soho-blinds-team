import { menuTypes } from "../constants/menuTypes";
import { actionTypes } from "../constants/actionTypes";

export const menusReducer = (menu = menuTypes.HOME, action) => {
  const type = action.type;
  const value = action.value;
  console.log("---", value);

  switch (type) {
    case actionTypes.CHANGE_MENU:
      return value;

    default:
      return menu;
  }
};
