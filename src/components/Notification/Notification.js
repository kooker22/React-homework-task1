import React from 'react';
const Notification = ({ total }) => total === 0 && <p>No feedback given</p>;

export default Notification;
