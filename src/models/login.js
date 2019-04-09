
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
    *createAppeal({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'createappeal', payload });
    },
  },

  reducers: {
    changemodal(state, action) {
      return {
        ...state, ...action.payload
      };
    },
    createappeal(state, action) {
      console.log("action ", action);
      return {
        ...state, ...action.payload
      };
    },




  },

};
