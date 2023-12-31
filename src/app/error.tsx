"use client";

import ErrorScreen from "@/components/error-screen";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return <ErrorScreen error={error} reset={reset} />;
};

export default Error;
