import { ToastProps, useToast } from '@chakra-ui/react';

/**
 * @description Toast de succès
 */
const useToastSuccess = (): ((
  props: ToastProps
) => string | number) => {
  const toast = useToast();
  return (props: ToastProps) => {
    const { title, description } = props;
    return toast({
      title,
      description,
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
};

export default useToastSuccess;
