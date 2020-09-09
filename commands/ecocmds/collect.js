module.exports = {
  name: "collect",
  code: `
$title[Collect]
$description[
You collected plorts from slimes and ended out with $random[100;300] Plorts!
]
$setVar[plorts;$sum[$getVar[plorts;$authorID];$random[100;300]];$authorID]
$globalCooldown[30m;You have to wait atleast {time} before you can collect plorts again.]
`
}