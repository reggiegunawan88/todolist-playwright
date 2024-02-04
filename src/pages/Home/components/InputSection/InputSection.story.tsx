import Snackbar from '@/components/Snackbar';
import InputSection from './index';

// Default input section component
export const InputSectionStory = () => {
  return <InputSection />;
};

// Input section component with snackbar attached
export const InputSectionWithSnackbarStory = () => {
  return (
    <>
      <InputSection />
      <Snackbar />
    </>
  );
};
