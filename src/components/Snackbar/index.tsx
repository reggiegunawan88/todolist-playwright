import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/hooks/useRTK';
import { closeSnackbar } from '@/store/slices/Snackbar';
import { useEffect } from 'react';

const Snackbar = () => {
  const { isOpen, description, type } = useAppSelector(state => state.snackbar);
  const dispatch = useAppDispatch();

  function renderSnackbarBackground() {
    switch (type) {
      case 'success':
        return '#34D399';
      case 'error':
        return '#F87171';
      default:
        return '';
    }
  }

  useEffect(() => {
    // Close snackbar after 2s of on every appearance
    const timeout = setTimeout(() => {
      dispatch(closeSnackbar());
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  if (!isOpen) {
    // Render nothing
    return null;
  }

  return (
    <div className="fixed z-50 flex w-full justify-end p-3">
      <div
        aria-label="snackbar-background-color"
        className="max-w-md rounded-lg"
        style={{ backgroundColor: renderSnackbarBackground() }}
      >
        <div className="flex flex-row items-center gap-x-4 px-6 py-3 text-white">
          <span aria-label="snackbar-description" className="text-base font-bold">
            {description}
          </span>
          <button className="relative h-4 w-4" onClick={() => dispatch(closeSnackbar())}>
            <Image alt="close-icon" src="/assets/close-icon.svg" layout="fill" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
