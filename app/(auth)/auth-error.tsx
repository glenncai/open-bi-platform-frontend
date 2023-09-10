import React from 'react';

interface AuthErrorProps {
  message: string;
}

export default function AuthError(props: AuthErrorProps) {
  const { message } = props;

  return <div className="text-red-500">{message}</div>;
}
