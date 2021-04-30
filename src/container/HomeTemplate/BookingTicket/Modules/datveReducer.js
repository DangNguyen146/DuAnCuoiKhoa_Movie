import { DAT_GHE, HUY_GHE } from "./constant";

const sateDefault = {
  dangSachGheDangDat: [],
};
const DatVeReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let dangSachGheDangDatUpDate = [...state.dangSachGheDangDat];
      let index = dangSachGheDangDatUpDate.findIndex(
        (gheDangDat) => gheDangDat.maGhe === action.ghe.maGhe
      );
      if (index !== -1) {
        dangSachGheDangDatUpDate.splice(index, 1);
      } else {
        dangSachGheDangDatUpDate.push(action.ghe);
      }
      //cập nhật lại state
      state.dangSachGheDangDat = dangSachGheDangDatUpDate;
      return { ...state };
    }
    case "HUY_GHE": {
      let dangSachGheDangDatUpDate = [...state.dangSachGheDangDat];
      let index = dangSachGheDangDatUpDate.findIndex(
        (gheDangDat) => gheDangDat.maGhe === action.maGhe
      );
      if (index !== -1) {
        dangSachGheDangDatUpDate.splice(index, 1);
      }
      state.dangSachGheDangDat = dangSachGheDangDatUpDate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
export default DatVeReducer;
