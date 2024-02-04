import Snackbar from '@/components/Snackbar';
import InputSection from './../index';

// Default input section component
export const InputSectionDefault = () => {
  return <InputSection />;
};

// Input section component with snackbar attached
export const InputSectionWithSnackbar = () => {
  return (
    <>
      <InputSection />
      <Snackbar />
    </>
  );
};
