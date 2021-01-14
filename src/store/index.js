import Vue from 'vue';
import Vuex from 'vuex';
import {
  setData,
  resultField,
  newLotteryField,
  listField
} from '@/helper/index';

import { nameList } from './name-list'

Vue.use(Vuex);

const defaultState = {
  config: {
    name: '年会抽奖',
    number: 118,
    grandPrize: 1,
    firstPrize: 5,
    secondPrize: 10,
    thirdPrize: 15
  },
  result: {
    grandPrize: [],
    firstPrize: [],
    secondPrize: [],
    thirdPrize: []
  },
  newLottery: [
    {
      key: 'firstPrize',
      name: '1st Prize'
    },
    {
      key: 'secondPrize',
      name: '2nd Prize'
    },
    {
      key: 'thirdPrize',
      name: '3rd Prize'
    }
  ],
  list: nameList,
  photos: []
};

export default new Vuex.Store({
  state: defaultState,
  mutations: {
    setClearConfig(state) {
      state.config = {
        name: '年会抽奖',
        number: 118,
        grandPrize: 1,
        firstPrize: 5,
        secondPrize: 5,
        thirdPrize: 15
      };
      state.newLottery = [
        {
          key: 'firstPrize',
          name: '1st Prize'
        },
        {
          key: 'secondPrize',
          name: '2nd Prize'
        },
        {
          key: 'thirdPrize',
          name: '3rd Prize'
        }
      ];
    },
    setClearList(state) {
      state.list = nameList;
    },
    setClearPhotos(state) {
      state.photos = [];
    },
    setClearResult(state) {
      state.result = {
        firstPrize: [],
        secondPrize: [],
        thirdPrize: []
      };
    },
    setClearStore(state) {
      state = JSON.parse(JSON.stringify(defaultState));
    },
    setConfig(state, config) {
      state.config = config;
    },
    setResult(state, result = {}) {
      state.result = result;

      setData(resultField, state.result);
    },
    setNewLottery(state, newLottery) {
      if (state.newLottery.find(item => item.name === newLottery.name)) {
        return;
      }
      state.newLottery.push(newLottery);
      setData(newLotteryField, state.newLottery);
    },
    setList(state, list) {
      const arr = state.list;
      list.forEach(item => {
        const arrIndex = arr.findIndex(data => data.key === item.key);
        if (arrIndex > -1) {
          arr[arrIndex].name = item.name;
        } else {
          arr.push(item);
        }
      });
      state.list = arr;

      setData(listField, arr);
    },
    setPhotos(state, photos) {
      state.photos = photos;
    }
  },
  actions: {},
  modules: {}
});
