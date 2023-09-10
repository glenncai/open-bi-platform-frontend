import { useAppDispatch } from '@/store/hooks/useAppDispatch';
import { loginReducer } from '@/store/features/user/userSlice';
import { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { getLoginUserInfoService, LoginUserInfoProps } from '@/services/auth';
import useGetUserInfo from './useGetUserInfo';

const useLoadUserData = () => {
  const dispatch = useAppDispatch();
  const [waitingUserData, setWaitingUserData] = useState(true);

  // Load user data from service
  const { run: runGetUserInfoService } = useRequest(getLoginUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { id, role, username } = result.data as LoginUserInfoProps;
      dispatch(loginReducer({ id, role, username }));
    },
    onFinally() {
      setWaitingUserData(false);
    },
  });

  // To determine if the user data exists in redux store
  const { username } = useGetUserInfo();
  useEffect(() => {
    if (username) {
      setWaitingUserData(false);
      return;
    }
    runGetUserInfoService();
  }, [runGetUserInfoService, username]);

  return { waitingUserData };
};

export default useLoadUserData;
