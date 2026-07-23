import Club from "../models/club.js";

async function createClub(data) {
    const club = await Club.create(data);
    if(!club) throw new Error("failed to create club");
    return club;
}

async function getClubs() {
    return await Club.find();
}

export {
    createClub,
    getClubs
}