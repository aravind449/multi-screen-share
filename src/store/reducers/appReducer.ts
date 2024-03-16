import { AppActionTypes, SET_CONNECTION_STATUS, SET_LOADING, SET_PEER_ID, SET_REMOTE_PEER_IDS, SET_REMOTE_PEER_ID_VALUE, SET_SCREEN_NAME } from '../actions/appActions';

interface AppState {
  loading: boolean;
  peerId: string;
  connectionStatus: boolean;
  screenName: string;
  remotePeerIds: string[];
  remotePeerIdValue: string;
}

const initialState: AppState = {
  loading: true,
  peerId: '',
  connectionStatus: false,
  screenName: "",
  remotePeerIds: [],
  remotePeerIdValue: ""
};

const appReducer = (state = initialState, action: AppActionTypes): AppState => {
    console.log('.....action',action.type);

  switch (action.type) {
    case SET_LOADING:
    console.log("sucess................")
      return {
        ...state,
        loading: action.payload,
      };
    case SET_PEER_ID:
        console.log("sucess................ssss")
      return {
        ...state,
        peerId: action.payload,
      };
      case SET_CONNECTION_STATUS:
        console.log("sucess................con sttus")
          return {
            ...state,
            connectionStatus: action.payload,
          };
        case SET_SCREEN_NAME:
            console.log("sucess................ssss screnn name")
          return {
            ...state,
            screenName: action.payload,
          };
          case SET_REMOTE_PEER_IDS:
            console.log("sucess................")
              return {
                ...state,
                remotePeerIds: [...state.remotePeerIds, action.payload],
              };
            case SET_REMOTE_PEER_ID_VALUE:
                console.log("sucess................ssss")
              return {
                ...state,
                remotePeerIdValue: action.payload,
              };
   
    default:
      return state;
  }
};

export default appReducer;
