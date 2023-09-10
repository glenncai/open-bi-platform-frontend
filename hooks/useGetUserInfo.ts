import { useAppSelector } from '@/store/hooks/useAppSelector';
import { UserStateProps } from '@/store/features/user/userSlice';

const useGetUserInfo = () => {
  const { id, role, username } = useAppSelector<UserStateProps>(state => state.user);
  return { id, role, username };
};

export default useGetUserInfo;
