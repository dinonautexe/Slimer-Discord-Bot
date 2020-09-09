module.exports = {
    name: "daily",
  code: `
$title[Daily Plorts]
$description[
**Thanks for checking in today!**
Here's your <:pinkplort:730132650265804810> $random[50;150] Plorts.]
$globalCooldown[24h;You need to wait {time} for your daily plorts.]
$setVar[plorts;$sum[$getVar[plorts;$authorID];$random[50;150]];$authorID]
`
}