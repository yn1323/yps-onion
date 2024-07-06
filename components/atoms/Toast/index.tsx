'use client';

import { atom, useAtomValue, useSetAtom } from 'jotai';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MdErrorOutline } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

import { tv } from 'tailwind-variants';

const AutoHideDuration = 10000;
const AnimationDuration = 300;

type ToastTypes = 'success' | 'error';

const toast = tv({
  base: 'fixed top-4 right-4 z-toast flex items-center gap-4 rounded-md p-5 opacity-0 transition duration-300',
  variants: {
    type: {
      success: 'bg-green-500 text-white',
      error: 'bg-red-500 text-white',
    } as Record<ToastTypes, string>,
    isClosable: {
      true: 'pr-10',
    },
    fadeIn: {
      true: 'opacity-100',
    },
    fadeOut: {
      true: 'opacity-0',
    },
  },
});

type ToastAtomState = {
  isOpen: boolean;
  isClosable: boolean;
  autoClose: boolean;
  message: string;
  type: 'success' | 'error';
};

const toastAtom = atom<ToastAtomState>({
  isOpen: false,
  isClosable: true,
  autoClose: true,
  message: '',
  type: 'success',
});

export const Toast = () => {
  const store = useAtomValue(toastAtom);
  const setToast = useSetAtom(toastAtom);

  const onClose = useCallback(() => {
    setToast((prev) => ({ ...prev, isOpen: false }));
  }, [setToast]);

  return <ToastInner {...store} onClose={onClose} />;
};

type Props = {
  onClose: () => void;
} & ToastAtomState;

export const ToastInner = ({
  isOpen,
  isClosable,
  autoClose = true,
  message,
  type,
  onClose,
}: Props) => {
  const [process, setProcess] = useState<'' | 'fadeIn' | 'fadeOut'>('');
  const autoHideTimer = useRef<ReturnType<typeof setTimeout>>();
  const animationTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleClose = useCallback(() => {
    setProcess('fadeOut');
    onClose();
    clearTimeout(autoHideTimer.current);

    animationTimer.current = setTimeout(() => {
      setProcess('');
    }, AnimationDuration);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen || !autoClose) {
      return;
    }

    setProcess('fadeIn');

    autoHideTimer.current = setTimeout(handleClose, AutoHideDuration);
  }, [isOpen, autoClose, handleClose]);

  const icon = useMemo(() => {
    switch (type) {
      case 'success':
        return <FaRegCircleCheck />;
      case 'error':
        return <MdErrorOutline />;
    }
  }, [type]);

  return (
    <div
      className={toast({
        type,
        isClosable,
        fadeIn: process === 'fadeIn',
        fadeOut: process === 'fadeOut',
      })}
    >
      <span>{icon}</span>
      <span>{message}</span>
      {isClosable && (
        <button
          type="button"
          aria-label="closeToast"
          onClick={handleClose}
          className="absolute top-2 right-2 grid h-6 w-6 place-content-center rounded-full"
        >
          <RxCross2 />
        </button>
      )}
    </div>
  );
};

export const useToast = () => {
  const setToast = useSetAtom(toastAtom);

  const showToast = useCallback(
    ({
      isClosable = true,
      autoClose = true,
      message = 'sample message',
      type = 'success',
    }: Partial<
      Pick<Props, 'isClosable' | 'autoClose' | 'message' | 'type'>
    >) => {
      setToast((prev) => ({
        ...prev,
        isOpen: true,
        autoClose,
        isClosable,
        message,
        type,
      }));
    },
    [setToast],
  );

  return {
    showToast,
  };
};
