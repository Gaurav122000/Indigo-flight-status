import notificationModel from "../../models/notification.model.js";

export const notificationSave = async (req, res) => {
  const Datafront = req.body;
  // console.log("this", Datafront);
  notificationModel.create(Datafront)
  .then((notification) => {
    console.log('Notification created:', notification);
    res.json(notification);
  })
  .catch((err) => {
    console.error('Error creating notification:', err);
    res.status(500).json({ error: 'Internal server error' });
  });

};