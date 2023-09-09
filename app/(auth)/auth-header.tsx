import Logo from '@/components/ui/logo';

export default function AuthHeader() {
  return (
    <div className="flex-1">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
      </div>
    </div>
  );
}
