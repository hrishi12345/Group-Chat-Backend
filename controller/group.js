const GroupRepo = require('../repository/group');
const GroupMembershipRepo = require('../repository/groupmembership');
const GroupMessageRepo = require('../repository/groupmessage');

const groupRepo = new GroupRepo();
const groupMembershipRepo = new GroupMembershipRepo();
const groupMessageRepo = new GroupMessageRepo();

// Group Controller
const createGroup = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { name, description } = req.body.groupDetails;

    // Call the repository to create a new group
    const group = await groupRepo.createGroupRecord({ name, description });

    // Send the response
    res.status(200).json({ group });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Group Membership Controller
const joinGroup = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { groupId, userId } = req.body;

    // Call the repository to create a new group membership
    const groupMembership = await groupMembershipRepo.joinGroup({ groupId, userId });

    // Send the response
    res.status(200).json({ groupMembership });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Group Message Controller
const createGroupMessage = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { content, groupId, userId } = req.body;

    // Call the repository to create a new group message
    const groupMessage = await groupMessageRepo.createGroupMessage({ content, groupId, userId });

    // Send the response
    res.status(200).json({ groupMessage });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createGroup,
  joinGroup,
  createGroupMessage,
};
