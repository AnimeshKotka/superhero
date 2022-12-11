const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    superHero: {
        type: String,
        required: [true, 'Please name the hero'],
        unique: true,
        trim: true
    },
    realName: {
        type: String,
        required: [true, 'Please name the hero'],
        unique: true,
        trim: true,
        maxlength: [200]
    },
})

module.exports = mongoose.models.Hero || mongoose.model('Hero', HeroSchema);