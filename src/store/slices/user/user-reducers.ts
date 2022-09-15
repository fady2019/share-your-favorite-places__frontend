import { AppStoreActionI, UserSliceI } from '../../../interfaces/store';
import { UserInfoI } from '../../../interfaces/users';

const userReducers = {
    setUserInfo: (state: UserSliceI, action: AppStoreActionI<UserInfoI>) => {
        state.userInfo = action.payload;
    },
    clearUserInfo: (state: UserSliceI) => {
        state.userInfo = null;
    },
};

export default userReducers;
