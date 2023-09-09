import Image from 'next/image';
import AuthBg from '@/public/images/auth-image.svg';

export default function AuthImage() {
  return (
    <div className="absolute bottom-0 right-0 top-0 hidden md:block md:w-1/2" aria-hidden="true">
      <Image
        className="h-full w-full object-center"
        src={AuthBg}
        priority
        width={760}
        height={1024}
        alt="Authentication"
      />
    </div>
  );
}
