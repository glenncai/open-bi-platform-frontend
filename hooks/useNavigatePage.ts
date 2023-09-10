import { useEffect } from 'react';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import { isCurrentAuthPath, isNoNeedUserInfoPath } from '@/utils/path';
import { usePathname, redirect } from 'next/navigation';

const useNavigatePage = (waitingUserData: boolean) => {
  const { username } = useGetUserInfo();
  const pathname = usePathname();

  useEffect(() => {
    if (waitingUserData) {
      return;
    }

    if (username) {
      if (isCurrentAuthPath(pathname)) {
        redirect('/');
      }
      return;
    }

    if (isNoNeedUserInfoPath(pathname)) {
      return;
    }

    redirect('/signin');
  }, [pathname, username, waitingUserData]);
};

export default useNavigatePage;
