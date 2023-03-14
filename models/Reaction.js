const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),

        },
        reactionBody: {
            type: String,
            required: "You need to provide a reaction!",
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            required: "You need to provide a username!",
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal),
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// delete this line? Don't think I need it
// README says that it is schema only
// const Reaction = model("Reaction", reactionSchema);

module.exports = Reaction;
