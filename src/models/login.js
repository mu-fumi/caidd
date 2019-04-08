
export default {

  namespace: 'login',

  state: {
    visible: false,
    title: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *changeModal({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'changemodal', payload });
    },
  },

  reducers: {
    changemodal(state, action) {
      console.log({
        ...state,
        ...action.payload
      }
      );
      return {
        ...state, ...action.payload
      };
    },
  },

};
