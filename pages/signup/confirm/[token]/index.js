import confirm from '@api/confirm';
import { withRouter } from '@components';
import { useMutation } from '@hooks';
import { toaster } from '@lib';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Page = ({ token }) => {
  console.log(token);
  const [isError, setIsError] = useState(false);
  const mutation = useMutation(confirm, {
    redirectOnSuccess: '/login',
    errorCallback: () => {
      setIsError(true);
      toaster.error('Your email was not validated!');
    },
  });

  useEffect(() => {
    mutation.mutateAsync(token);
  }, []);
  return (
    <div className="grid h-screen w-full place-items-center">
      <div className="h-4/5 w-4/5 ">
        {isError && (
          <div className="relative mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">
              {' '}
              Your email has not been validated. Please try signing up again.
            </span>
          </div>
        )}
        {!isError && (
          <div className="relative mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
            <strong className="font-bold">Congratulations!</strong>
            <h2 className="mb-4 font-semibold">Your email was validated!</h2>
            <Link href="/login" className="hover:underline">
              &larr; Return to login page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Page);
