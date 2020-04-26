import { Types } from "./actions";
import { keyBy } from "lodash";

const INITIAL_STATE = {
  loading: false,
  list: {},
  search: "",
};
export const activitiesReducer = (state = INITIAL_STATE, action) => {
  const payload = action.payload;
  switch (action.type) {
    case Types.GET_ACTIVITIES:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_ACTIVITIES_FAIL:
      return {
        ...state,
        loading: false,
      };
    case Types.GET_ACTIVITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: keyBy(remapActivities(payload.activities), "id"),
      };
    case Types.SEARCH_KEY_CHANGED:
      return {
        ...state,
        search: payload.search,
      };
    default:
      return state;
  }
};

function remapActivities(entries) {
  let items = entries.reduce(function (results, item) {
    (results[item.gs$cell.row] = results[item.gs$cell.row] || []).push(item);
    return results;
  }, {});
  delete items[1];

  let parsed_items = [];

  Object.keys(items).forEach((row) => {
    let parsed_item = items[row].map((cell) => {
      return {
        col: cell.gs$cell.col,
        content: cell.content.$t,
        row: cell.gs$cell.row,
      };
    });

    let result = {};
    for (let i = 0; i < parsed_item.length; i++) {
      result[parsed_item[i].col] = parsed_item[i].content;
    }
    result[0] = parsed_item[0].row;
    parsed_items.push(result);
  });

  return parseActivity(parsed_items);
}

function parseActivity(data) {
  return data.map((row) => {
    return {
      id: getRowValue(row, 0),
      category: getRowValue(row, 1),
      name: getRowValue(row, 2),
      location: getRowValue(row, 3),
      address: getRowValue(row, 4),
      phone: getRowValue(row, 5),
      email: getRowValue(row, 6),
      description: getRowValue(row, 7),
      website: getRowValue(row, 8),
      facebook: getRowValue(row, 9),
      paymentType: getRowValue(row, 10),
      openTime: getRowValue(row, 11),
      homeDelivery: getRowValue(row, 12),
      minOrder: getRowValue(row, 13),
    };
  });

  function getRowValue(row, id, output) {
    if (row[id]) {
      let value = row[id];
      switch (output) {
        case "bool":
          return value.toLowerCase() === "true";
        case "array":
          return value.split(", ") || [];
        default:
          return value;
      }
    } else {
      return null;
    }
  }
}
