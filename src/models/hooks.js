const mongoose = require('mongoose');
const { Schema } = mongoose;

const Hooks = new Schema(
    {
        hook_id: { type: String },
        trigger_url: { type: String },
        name: { type: String },
        status: { type: Boolean },
    },
    {
        collection: 'hooks',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
);

module.exports = mongoose.model('hooks', Hooks);
