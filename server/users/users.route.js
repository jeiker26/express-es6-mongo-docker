import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const users = await req.context.models.User.find({}, (err, users) => {
        let userMap = [];
        users.forEach((user) => {
            userMap[user._id] = user;
        });
    });
    return res.send(users);
});

router.get('/:userId', async (req, res) => {
    const user = await req.context.models.User.findById(
        req.params.userId,
    );
    return res.send(user);
});

router.post('/', async (req, res) => {
    const user = new req.context.models.User({
        username: req.body.username,
        email: req.body.email
    });
    await user.save();
    return res.send(user);
});

router.patch('/:userId', async (req, res) => {
    await req.context.models.User.findOneAndUpdate({ _id: req.params.userId }, { description: req.body.description },(err, user) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "User successfully updated",
            ...user._doc
        };
        return res.status(200).send(response);
    });
});

router.delete('/:userId', async (req, res) => {
    await req.context.models.User.findOneAndDelete({ _id: req.params.userId }, (err, user) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "User successfully deleted",
            id: user._id
        };
        return res.status(200).send(response);
    });
});

export default router;