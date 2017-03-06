import { API_URL } from '../../constants';

export const SET_ITEMS = 'SET_ITEMS';

export function getCharacters() {
  return dispatch =>
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(res => res.items)
      .then(items =>
        dispatch(setCharacters(items))

      );
}
export function setCharacters(items) {
  return {
    type: SET_ITEMS,
    items,
  };
}

