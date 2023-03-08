import { configureStore } from '@reduxjs/toolkit';
import reducer, {
  fetchRockets,
  reserveRocket,
  cancelReserve,
} from 'src/redux/rocketsSlice';

const rocket = {
  rocket_id: '1',
  reserved: false,
};

describe('rocketsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        rockets: reducer,
      },
    });
    fetch.resetMocks();
  });

  it('should fetch the rockets and update the store', async () => {
    fetch.mockResponseOnce(JSON.stringify([rocket]));
    await store.dispatch(fetchRockets());

    const { rockets } = store.getState();

    expect(rockets.list).toEqual([rocket]);
  });

  it('should update rocket from the store using rocket id', async () => {
    fetch.mockResponseOnce(JSON.stringify([rocket]));
    await store.dispatch(fetchRockets());

    const id = store.getState().rockets.list[0].rocket_id;
    store.dispatch(reserveRocket(id));

    const { rockets } = store.getState();
    expect(rockets.list[0].reserved).toEqual(true);
  });

  it('should update rocket from the store using rocket id', async () => {
    fetch.mockResponseOnce(JSON.stringify([rocket]));
    await store.dispatch(fetchRockets());

    const id = store.getState().rockets.list[0].rocket_id;
    store.dispatch(cancelReserve(id));

    const { rockets } = store.getState();
    expect(rockets.list[0].reserved).toEqual(false);
  });
});
