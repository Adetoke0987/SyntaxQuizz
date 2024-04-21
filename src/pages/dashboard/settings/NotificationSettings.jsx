import React, { useState } from 'react';
import './css/notify.css'

const NotificationSettings = () => {
  // State variables for notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  // Handle toggle switches for notification types
  const handleNotificationChange = (type, isChecked) => {
    switch (type) {
      case 'email':
        setEmailNotifications(isChecked);
        break;
      case 'push':
        setPushNotifications(isChecked);
        break;
      default:
        console.error(`Unknown notification type: ${type}`);
    }
  };

  return (
    <div className="notification-settings">
      <h2>Notification Settings</h2>
      <form>
        <label htmlFor="emailNotifications">
          <input
            type="checkbox"
            id="emailNotifications"
            checked={emailNotifications}
            onChange={(e) => handleNotificationChange('email', e.target.checked)}
          />
          Email Notifications
        </label>
        <label htmlFor="pushNotifications">
          <input
            type="checkbox"
            id="pushNotifications"
            checked={pushNotifications}
            onChange={(e) => handleNotificationChange('push', e.target.checked)}
          />
          Push Notifications (Coming Soon)
        </label>
        <button type="submit" disabled={true}>
          Save Settings (Currently Disabled)
        </button>
      </form>
    </div>
  );
};

export default NotificationSettings;
