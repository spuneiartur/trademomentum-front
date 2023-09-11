import confirm from '@api/confirm';
import { withRouter } from '@components';
import { useMutation } from '@hooks';
import { router, toaster } from '@lib';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

const Page = ({ token }) => {
  const [status, setStatus] = useState('loading'); // Initially set to 'loading'
  const [errorMessage, setErrorMessage] = useState('');
  const onErrorCallback = (error) => {
    setStatus('error'); // Set status to 'error' on error
    setErrorMessage(error?.message);
    toaster.error(error?.message || 'Something went wrong!');
  };

  const onSuccessCallback = () => {
    setStatus('success'); // Set status to 'success' on success
    debounce(() => {
      router.push('/login');
    }, 3000)();
  };

  const mutation = useMutation(confirm, {
    onError: onErrorCallback,
    onSuccess: onSuccessCallback,
  });

  useEffect(() => {
    mutation.mutateAsync(token);
  }, []);

  // Define content based on the status
  let content;
  switch (status) {
    case 'loading':
      content = <p>Loading...</p>;
      break;
    case 'error':
      content = (
        <div className="flex  flex-col items-center justify-center gap-5">
          <div className="h-20 w-20">
            <img src="/icons/error_icon.svg" alt="error icon" />
          </div>
          <div className="relative mb-4 w-1/2 rounded border border-yellow-400 bg-yellow-100 px-4 py-3 text-center  text-red-700">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {errorMessage || 'Something went wrong!'}</span>
            <span>
              {' '}
              <br />
              <br />
              Contact us for support!
            </span>
          </div>
        </div>
      );
      break;
    case 'success':
      content = (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="h-20 w-20">
            <img src="/icons/success_icon.svg" alt="error icon" />
          </div>
          <div className="lin q q relative mb-4 w-1/2 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">
            <strong className="font-bold">Congratulations!</strong>{' '}
            <h2 className="mb-4 font-semibold">
              Your email was validated! Redirecting to login page...
            </h2>
          </div>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <div className="grid h-screen w-full place-items-center">
      <div className="h-4/5 w-4/5 ">{content}</div>
    </div>
  );
};

export default withRouter(Page);
