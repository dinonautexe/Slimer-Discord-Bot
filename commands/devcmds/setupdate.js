module.exports = {
  name: "setupdate",
  code: `
$setVar[update;$message[]]
$onlyIf[$message[1]!=;The update cant be empty]
$title[Update Set]
$description[
Set the current Slimer update to **$message[]**
]
$onlyForUsers[544646066579046401;Only Slimer Developers can use this command!]
`
}