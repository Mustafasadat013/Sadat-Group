import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Notification, NotificationContainer } from '../Notification';
import { useNotificationStore } from '@/store';

// Mock the store
jest.mock('@/store', () => ({
  useNotificationStore: jest.fn(),
}));

const mockUseNotificationStore = useNotificationStore as jest.MockedFunction<typeof useNotificationStore>;

describe('Notification', () => {
  const mockRemoveNotification = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders notification with correct content', () => {
    const notification = {
      id: '1',
      type: 'success' as const,
      title: 'Success',
      message: 'Operation completed successfully',
    };

    render(<Notification {...notification} />);

    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Operation completed successfully')).toBeInTheDocument();
  });

  it('auto-removes notification after duration', () => {
    const notification = {
      id: '1',
      type: 'info' as const,
      title: 'Info',
      message: 'Information message',
      duration: 3000,
    };

    mockUseNotificationStore.mockReturnValue({
      removeNotification: mockRemoveNotification,
      notifications: [],
      addNotification: jest.fn(),
      clearNotifications: jest.fn(),
    });

    render(<Notification {...notification} />);

    // Fast-forward time
    jest.advanceTimersByTime(3000);

    expect(mockRemoveNotification).toHaveBeenCalledWith('1');
  });

  it('allows manual removal', () => {
    const notification = {
      id: '1',
      type: 'warning' as const,
      title: 'Warning',
      message: 'Warning message',
    };

    mockUseNotificationStore.mockReturnValue({
      removeNotification: mockRemoveNotification,
      notifications: [],
      addNotification: jest.fn(),
      clearNotifications: jest.fn(),
    });

    render(<Notification {...notification} />);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(mockRemoveNotification).toHaveBeenCalledWith('1');
  });
});

describe('NotificationContainer', () => {
  it('renders multiple notifications', () => {
    const notifications = [
      {
        id: '1',
        type: 'success' as const,
        title: 'Success',
        message: 'Success message',
      },
      {
        id: '2',
        type: 'error' as const,
        title: 'Error',
        message: 'Error message',
      },
    ];

    mockUseNotificationStore.mockReturnValue({
      notifications,
      removeNotification: jest.fn(),
      addNotification: jest.fn(),
      clearNotifications: jest.fn(),
    });

    render(<NotificationContainer />);

    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('renders empty when no notifications', () => {
    mockUseNotificationStore.mockReturnValue({
      notifications: [],
      removeNotification: jest.fn(),
      addNotification: jest.fn(),
      clearNotifications: jest.fn(),
    });

    render(<NotificationContainer />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});