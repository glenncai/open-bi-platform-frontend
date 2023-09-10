import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
  text: string;
  type: 'success' | 'error' | 'info' | 'warn';
  show: boolean;
  setShow: (show: boolean) => void;
  autoCloseTime?: number;
  hideProgressBar?: boolean;
}

export default function Toast(props: ToastProps) {
  const { text, type, show, setShow, autoCloseTime = 500, hideProgressBar = false } = props;

  function closeNotification() {
    setShow(false);
  }

  function createNotification() {
    switch (type) {
      case 'success':
        toast.success(text, {
          toastId: text,
          onClose: closeNotification,
        });
        break;
      case 'error':
        toast.error(text, {
          toastId: text,
          onClose: closeNotification,
        });
        break;
      case 'info':
        toast.info(text, {
          toastId: text,
          onClose: closeNotification,
        });
        break;
      case 'warn':
        toast.warn(text, {
          toastId: text,
          onClose: closeNotification,
        });
        break;
      default:
        break;
    }
  }

  createNotification();

  const renderNotification = () => (
    <ToastContainer
      position="top-right"
      autoClose={autoCloseTime}
      hideProgressBar={hideProgressBar}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
  );

  return <>{renderNotification()}</>;
}
