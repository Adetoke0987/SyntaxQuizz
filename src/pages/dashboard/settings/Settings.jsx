import React, { useState } from 'react';

const Settings = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailPreferences, setEmailPreferences] = useState(true);
  const [notificationSettings, setNotificationSettings] = useState(true);

  const handleChangePassword = () => {
    // Implement password change logic here
  };

  const handleSaveSettings = () => {
    // Implement saving settings logic here
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="change-password">
        <h3>Change Password</h3>
        <input
          type="password"
          placeholder="Current Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>Change Password</button>
      </div>
      <div className="preferences">
        <h3>Email Preferences</h3>
        <label>
          <input
            type="checkbox"
            checked={emailPreferences}
            onChange={() => setEmailPreferences(!emailPreferences)}
          />
          Receive promotional emails
        </label>
        {/* You can add more email preferences here */}
      </div>
      <div className="notification-settings">
        <h3>Notification Settings</h3>
        <label>
          <input
            type="checkbox"
            checked={notificationSettings}
            onChange={() => setNotificationSettings(!notificationSettings)}
          />
          Receive push notifications
        </label>
        {/* You can add more notification settings here */}
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default Settings;
